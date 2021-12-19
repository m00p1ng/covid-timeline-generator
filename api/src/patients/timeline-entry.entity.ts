import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Patient } from './patient.entity';
import { LocationType } from '../commons/enums/location-type.enum';

@Entity()
export class TimelineEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'time_from',
    type: 'timestamptz',
    nullable: false,
  })
  timeFrom: Date;

  @Column({
    name: 'time_to',
    type: 'timestamptz',
    nullable: false,
  })
  timeTo: Date;

  @Column({
    name: 'detail',
    nullable: false,
  })
  detail: string;

  @Column({
    name: 'location_type',
    nullable: false,
  })
  locationType: LocationType;

  @Column({
    name: 'location',
    nullable: false,
  })
  location: string;

  @ManyToOne(() => Patient, (patient) => patient.timelineEntries)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date;
}
