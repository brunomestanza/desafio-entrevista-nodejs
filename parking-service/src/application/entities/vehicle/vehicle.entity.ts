import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  brand: string;

  @Column('text')
  model: string;

  @Column('text')
  color: string;

  @Column({ length: 20 })
  licensePlate: string;

  @Column('text')
  type: string;
}
