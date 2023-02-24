import { Establishment } from '@application/entities/establishment/establishment.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mestanza',
        database: 'parking',
        entities: [Establishment],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
