import { CreateEstablishment } from './create-establishment';
import { InMemoryEstablishmentsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Create establishment', () => {
  it('should be able to create a establishment', async () => {
    const establishmentRepository = new InMemoryEstablishmentsRepository();
    const createEstablishment = new CreateEstablishment(
      establishmentRepository,
    );

    const { establishment } = await createEstablishment.execute({
      address: 'Endereço de teste',
      cnpj: '65.774.650/0001-30',
      phone: '+55(12)92345-6789',
      name: 'Lojinha do seu Celso',
      quantityOfCarsVacancys: 1,
      quantityOfMotorcycleVacancys: 1,
    });

    expect(establishmentRepository.establishments).toHaveLength(1);
    expect(establishmentRepository.establishments[0]).toEqual(establishment);
  });
});
