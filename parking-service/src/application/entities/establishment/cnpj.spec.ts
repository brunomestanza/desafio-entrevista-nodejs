import { Cnpj } from './cnpj';

describe('Establishment cpnj', () => {
  it('should be able to create a CNPJ', () => {
    const cpnj = new Cnpj('65.774.650/0001-30');

    expect(cpnj).toBeTruthy();
  });

  it('should not be able to create a CNPJ with a invalid format', () => {
    expect(() => new Cnpj('123')).toThrow();
  });
});
