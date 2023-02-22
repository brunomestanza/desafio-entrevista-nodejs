import { Establishment } from '../entities/establishment';

export abstract class EstablishmentsRepository {
  abstract create(establishment: Establishment): Promise<void>;
}
