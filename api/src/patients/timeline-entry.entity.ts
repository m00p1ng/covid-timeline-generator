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
import { Expose } from 'class-transformer';

import { Patient } from './patient.entity';
import { LocationType } from '../commons/enums/location-type.enum';

@Entity()
export class TimelineEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({
    name: 'time_from',
    type: 'timestamptz',
    nullable: false,
  })
  @Expose()
  timeFrom: Date;

  @Column({
    name: 'time_to',
    type: 'timestamptz',
    nullable: false,
  })
  @Expose()
  timeTo: Date;

  @Column({
    name: 'detail',
    nullable: false,
  })
  @Expose()
  detail: string;

  @Column({
    name: 'location_type',
    nullable: false,
  })
  @Expose()
  locationType: LocationType;

  @Column({
    name: 'location',
    nullable: true,
  })
  @Expose()
  location?: string;

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
