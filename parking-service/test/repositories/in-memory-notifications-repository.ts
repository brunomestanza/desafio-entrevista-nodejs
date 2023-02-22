import { EstablishmentsRepository } from '@applicationrepositories/establishments-repository';
import { Establishment } from '@applicationentities/establishment';

export class InMemoryEstablishmentsRepository
  implements EstablishmentsRepository
{
  public establishments: Establishment[] = [];

  async create(establishment: Establishment) {
    this.establishments.push(establishment);
  }
}
