import { UnprocessableEntityException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
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
}
