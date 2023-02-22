import { Phone } from './phone';

describe('Establishment phone', () => {
  it('should be able to create a phone', () => {
    const cpnj = new Phone('+55(12)92345-6789');

    expect(cpnj).toBeTruthy();
  });

  it('should not be able to create a phone with a invalid format', () => {
    expect(() => new Phone('123')).toThrow();
  });
});
