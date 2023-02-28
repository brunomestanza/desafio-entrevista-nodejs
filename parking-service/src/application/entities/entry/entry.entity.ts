import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Establishment } from '@application/entities/establishment/establishment.entity';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entryDate: string;

  @Column()
  exitDate: string;

  @ManyToOne(() => Establishment, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  establishment: Establishment;

  @ManyToOne(() => Vehicle, { cascade: true, eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  vehicle: Vehicle;
}
