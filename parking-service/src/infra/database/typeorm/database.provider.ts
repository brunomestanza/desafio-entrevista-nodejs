import { DataSource } from 'typeorm';
import { Establishment } from '@application/entities/establishment/establishment.entity';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';
import { Entry } from '@application/entities/entry/entry.entity';
import { User } from '@application/entities/users/users.entity';

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
        entities: [Establishment, Vehicle, Entry, User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
