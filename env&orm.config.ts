import { DEVELOPMENT } from '@/constant';
import { CONFIG_ENUM } from '@/enum';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//使用dotEnv读取环境变量里面的配置
//通用的环境变量配置
const defaultConfig = dotenv.parse(readFileSync('.env'));
//当前环境的环境变量配置
const currentConfig = dotenv.parse(
  readFileSync(`.env.${process.env.NODE_ENV}`),
);
//拿到当前环境变量的配置的类型
type CONFIG_ENUM_VALUE = (typeof CONFIG_ENUM)[keyof typeof CONFIG_ENUM];

//后面项目里面需要使用env的配置，直接从这里面取就行了,有类型提示更加方便
export const envConfig = {
  ...defaultConfig,
  ...currentConfig,
} as unknown as Record<CONFIG_ENUM_VALUE, string | number>;

export const ormConfig = {
  type: envConfig.TYPE,
  port: envConfig.PORT,
  host: envConfig.HOST,
  username: envConfig.USER_NAME,
  password: envConfig.PASSWORD,
  database: envConfig.DATABASE,
  entities: [join(__dirname + '/**/*.entity{.js,.ts}')],
  synchronize: process.env.NODE_ENV === DEVELOPMENT,
} as TypeOrmModuleOptions;
