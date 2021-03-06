import {
  UnprocessableEntityException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './patient.entity';
import { TimelineEntry } from './timeline-entry.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { CreateTimelineEntryDto } from './dto/create-timeline-entry.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(TimelineEntry)
    private readonly timelineEntryRepository: Repository<TimelineEntry>,
    private readonly configService: ConfigService,
  ) {}

  public async createPatient(data: CreatePatientDto): Promise<Patient> {
    const MAXIMUM_PATIENTS = parseInt(
      this.configService.get<string>('MAXIMUM_PATIENTS'),
      10,
    );
    const countPatients = await this.patientRepository.count();

    if (countPatients >= MAXIMUM_PATIENTS) {
      throw new UnprocessableEntityException(
        'Current number of patients is reach the limit',
      );
    }

    const newPatient = new Patient();
    newPatient.gender = data.gender;
    newPatient.age = data.age;
    newPatient.occupation = data.occupation;

    const result = await this.patientRepository.save(newPatient);

    return result;
  }

  public async findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  public async findById(id: string): Promise<Patient> {
    const patient = await this.patientRepository.findOne(id);

    if (!patient) {
      throw new NotFoundException(`Patient id:${id} is not found`);
    }

    return patient;
  }

  public async deleteById(id: string): Promise<void> {
    await this.findById(id);
    await this.patientRepository.delete(id);
  }

  public async getTimelineEntriesByPatientId(
    id: string,
  ): Promise<TimelineEntry[]> {
    const patient = await this.findById(id);

    const timelineEntries = await this.timelineEntryRepository.find({
      where: { patient },
    });

    return timelineEntries;
  }

  public async createTimelineEntryByPatientId(
    id: string,
    timelineEntry: CreateTimelineEntryDto,
  ): Promise<TimelineEntry> {
    const patient = await this.findById(id);

    const newTimelineEntry = new TimelineEntry();
    newTimelineEntry.patient = patient;
    newTimelineEntry.timeTo = timelineEntry.timeTo;
    newTimelineEntry.timeFrom = timelineEntry.timeFrom;
    newTimelineEntry.locationType = timelineEntry.locationType;
    newTimelineEntry.location = timelineEntry.location;
    newTimelineEntry.detail = timelineEntry.detail;

    const result = await this.timelineEntryRepository.save(newTimelineEntry);

    return result;
  }

  public async deleteTimelineEntryByPatientId(
    id: string,
    timelineEntryId: string,
  ): Promise<void> {
    await this.findById(id);
    const timelineEntry = await this.timelineEntryRepository.findOne(
      timelineEntryId,
    );

    if (!timelineEntry) {
      throw new NotFoundException(`Timeline Entry id:${id} is not found`);
    }

    await this.timelineEntryRepository.delete(timelineEntryId);
  }
}
