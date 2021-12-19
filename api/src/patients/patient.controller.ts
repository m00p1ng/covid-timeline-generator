import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  SerializeOptions,
} from '@nestjs/common';

import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { CreateTimelineEntryDto } from './dto/create-timeline-entry.dto';
import { Patient } from './patient.entity';
import { TimelineEntry } from 'src/patients/timeline-entry.entity';

@Controller('api/patients')
@SerializeOptions({
  strategy: 'excludeAll',
})
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  public async createPatient(
    @Body() patient: CreatePatientDto,
  ): Promise<Patient> {
    return this.patientService.createPatient(patient);
  }

  @Get()
  public async getAllPatients(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  public async getPatientById(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findById(id);
  }

  @Delete(':id')
  public async deletePatientById(@Param('id') id: string): Promise<void> {
    return this.patientService.deleteById(id);
  }

  @Get(':id/timeline-entries')
  public async getAllTimelineEntriesByPatientId(
    @Param('id') id: string,
  ): Promise<TimelineEntry[]> {
    return this.patientService.getTimelineEntriesByPatientId(id);
  }

  @Post(':id/timeline-entries')
  public async createTimelineEntryByPatientId(
    @Param('id') id: string,
    @Body() timelineEntry: CreateTimelineEntryDto,
  ): Promise<TimelineEntry> {
    return this.patientService.createTimelineEntryByPatientId(
      id,
      timelineEntry,
    );
  }

  @Delete(':id/timeline-entries/:timelineEntryId')
  public async deleteTimelineEntryByPatientId(
    @Param('id') id: string,
    @Param('timelineEntryId') timelineEntryId: string,
  ): Promise<void> {
    return this.patientService.deleteTimelineEntryByPatientId(
      id,
      timelineEntryId,
    );
  }
}
