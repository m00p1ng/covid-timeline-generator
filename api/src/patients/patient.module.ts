import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Patient } from './patient.entity';
import { TimelineEntry } from './timeline-entry.entity';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, TimelineEntry])],
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
