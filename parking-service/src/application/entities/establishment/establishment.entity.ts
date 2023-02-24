import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Establishment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  cnpj: string;

  @Column()
  address: string;

  @Column({ length: 20 })
  phone: string;

  @Column('int')
  quantityOfMotorcycleVacancys: number;

  @Column('int')
  quantityOfCarsVacancys: number;
}
