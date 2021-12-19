import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.entity';

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
}
