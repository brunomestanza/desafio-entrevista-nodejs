import { Establishment } from '.';
import { Cnpj } from './cnpj';
import { Phone } from './phone';

describe('Establishment', () => {
  it('should be able to create a Establishment', () => {
    const content = new Establishment({
      id: 'example-id',
      name: 'Lojinha do seu Celso',
      cnpj: new Cnpj('65.774.650/0001-30'),
      address: 'Local da loja',
      phone: new Phone('+55(12)92345-6789'),
      quantityOfMotorcycleVacancys: 1,
      quantityOfCarsVacancys: 1,
    });

    expect(content).toBeTruthy();
  });
});
