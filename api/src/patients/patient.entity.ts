import { 
  BaseEntity, 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  OneToMany, 
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Entry } from '../entries/entry.entity';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    name: 'gender',
    nullable: false,
  })
  gender: string;

  @Column({ 
    name: 'age',
    nullable: false,
  })
  age: number;

  @Column({ 
    name: 'occupation',
    nullable: false,
  })
  occupation: string;

  @OneToMany(() => Entry, entry => entry.patient)
  entries: Entry[];

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