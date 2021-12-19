import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';

import { TimelineEntry } from './timeline-entry.entity';
import { Gender } from '../commons/enums/gender.enum';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({
    name: 'gender',
    nullable: false,
  })
  @Expose()
  gender: Gender;

  @Column({
    name: 'age',
    nullable: false,
  })
  @Expose()
  age: number;

  @Column({
    name: 'occupation',
    nullable: false,
  })
  @Expose()
  occupation: string;

  @OneToMany(() => TimelineEntry, (timelineEntry) => timelineEntry.patient)
  @Expose()
  timelineEntries: TimelineEntry[];

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
