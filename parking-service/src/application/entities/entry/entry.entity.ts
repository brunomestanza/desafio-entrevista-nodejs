import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
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

  @OneToOne(() => Establishment, { cascade: true, eager: true })
  @JoinColumn()
  establishment: Establishment;

  @OneToOne(() => Vehicle, { cascade: true, eager: true })
  @JoinColumn()
  vehicle: Vehicle;
}
