import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Admin } from './src/entities/admin.entity';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'authSample',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  entities: [Admin],
  synchronize: false,
  logging: false,
};

export default config;
