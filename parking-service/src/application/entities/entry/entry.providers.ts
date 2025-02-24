import { DataSource } from 'typeorm';
import { Entry } from './entry.entity';

export const entryProviders = [
  {
    provide: 'ENTRY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Entry),
    inject: ['DATA_SOURCE'],
  },
];
