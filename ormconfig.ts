import MyEntity from './src/entity';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// const config: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: database().host,
//   port: Number(database().port),
//   username: database().username,
//   password: database().password,
//   database: database().database,
//   entities: MyEntity,
//   synchronize: database().sync
// };

// export default config;

const getOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    synchronize: configService.get('DB_SYNC'),
    logging: true,
    entities: MyEntity
  };
};

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> => getOrmConfig(configService),
  inject: [ConfigService]
};
