import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';

import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  public async createPatient(data: CreatePatientDto): Promise<Patient> {
    const newPatient = new Patient();
    newPatient.gender = data.gender;
    newPatient.age = data.age;
    newPatient.occupation = data.occupation;

    const result = await this.patientRepository.save(newPatient);

    return result;
  }
}
