import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import database from "./src/config/database";
import MyEntity from "./src/entity";


const config: MysqlConnectionOptions = {
  type: "mysql",
  host: database().host,
  port: Number(database().port),
  username: database().username,
  password: database().password,
  database: database().database,
  entities: MyEntity,
  synchronize: database().sync
};

export default config;
