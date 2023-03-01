import { DataSource } from 'typeorm';
import { Establishment } from '@application/entities/establishment/establishment.entity';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';
import { Entry } from '@application/entities/entry/entry.entity';
import { User } from '@application/entities/users/users.entity';
import { constants } from 'env';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: constants.host,
        port: constants.port,
        username: constants.username,
        password: constants.password,
        database: constants.database,
        entities: [Establishment, Vehicle, Entry, User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
