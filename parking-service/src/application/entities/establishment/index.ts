import { Cnpj } from './cnpj';
import { Phone } from './phone';

export interface EstablishmentProps {
  id: string;
  name: string;
  cnpj: Cnpj;
  address: string;
  phone: Phone;
  quantityOfMotorcycleVacancys: number;
  quantityOfCarsVacancys: number;
}

export class Establishment {
  private props: EstablishmentProps;

  constructor(props: EstablishmentProps) {
    this.props = props;
  }

  public get id() {
    return this.id;
  }

  public get name() {
    return this.name;
  }

  public set name(name: string) {
    this.name = name;
  }

  public get cnpj() {
    return this.cnpj;
  }

  public set cnpj(cnpj: string) {
    this.cnpj = cnpj;
  }

  public get address() {
    return this.address;
  }

  public set address(address: string) {
    this.address = address;
  }

  public get phone() {
    return this.phone;
  }

  public set phone(phone: string) {
    this.phone = phone;
  }
  public get quantityOfMotorcycleVacancys() {
    return this.quantityOfMotorcycleVacancys;
  }

  public set quantityOfMotorcycleVacancys(
    quantityOfMotorcycleVacancys: string,
  ) {
    this.quantityOfMotorcycleVacancys = quantityOfMotorcycleVacancys;
  }
  public get quantityOfCarsVacancys() {
    return this.quantityOfCarsVacancys;
  }

  public set quantityOfCarsVacancys(quantityOfCarsVacancys: string) {
    this.quantityOfCarsVacancys = quantityOfCarsVacancys;
  }
}
