import { Establishment } from '@application/entities/establishment/establishment.entity';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';
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
        entities: [Establishment, Vehicle],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
