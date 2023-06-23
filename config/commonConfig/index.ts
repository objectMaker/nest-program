import { DEVELOPMENT } from '@/constant';
import { CONFIG_ENUM } from '@/enum';
import { join } from 'path';

export default function generateConfig() {
  return {
    type: process.env[CONFIG_ENUM.TYPE],
    port: Number(process.env[CONFIG_ENUM.PORT]),
    host: process.env[CONFIG_ENUM.HOST],
    username: process.env[CONFIG_ENUM.USERNAME],
    password: process.env[CONFIG_ENUM.PASSWORD],
    database: process.env[CONFIG_ENUM.DATABASE],
    entities: [join(__dirname + '../../../src/**/*.entity{.ts,.js}')],
    synchronize: process.env.NODE_ENV === DEVELOPMENT,
  };
}
