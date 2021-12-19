import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';

import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { TimelineEntry } from 'src/patients/timeline-entry.entity';

@Controller('patients')
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
}
