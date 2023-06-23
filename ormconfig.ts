import { DEVELOPMENT } from '@/constant';
import { CONFIG_ENUM } from '@/enum';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
//使用dotEnv读取环境变量里面的配置
//通用的环境变量配置
const defaultConfig = dotenv.parse(readFileSync('.env'));
//当前环境的环境变量配置
const currentConfig = dotenv.parse(
  readFileSync(`.env.${process.env.NODE_ENV}`),
);
//拿到当前环境变量的配置的类型
type CONFIG_ENUM_VALUE = (typeof CONFIG_ENUM)[keyof typeof CONFIG_ENUM];
//断言

const ormConfig = {
  ...defaultConfig,
  ...currentConfig,
} as unknown as Record<CONFIG_ENUM_VALUE, string | number>;

export function ormConfigGenerator() {
  return {
    type: ormConfig.TYPE,
    port: ormConfig.PORT,
    host: ormConfig.HOST,
    username: ormConfig.USER_NAME,
    password: ormConfig.PASSWORD,
    database: ormConfig.DATABASE,
    entities: [join(__dirname + '/**/*.entity{.js,.ts}')],
    synchronize: process.env.NODE_ENV === DEVELOPMENT,
  };
}
