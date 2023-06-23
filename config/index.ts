import { CONFIG_ENUM } from '@/enum';

export default {
  type: process.env[CONFIG_ENUM.TYPE],
  port: process.env[CONFIG_ENUM.PORT],
  host: process.env[CONFIG_ENUM.HOST],
  username: process.env[CONFIG_ENUM.USERNAME],
  password: process.env[CONFIG_ENUM.PASSWORD],
  database: process.env[CONFIG_ENUM.DATABASE],
  entities: [],
  synchronize: true,
};
