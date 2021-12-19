import { Body, Controller, Get, Post } from '@nestjs/common';

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
  public async findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }
}
