import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import validationSchema from 'validationSchema';
import { ormConfigGenerator } from '~/ormConfig';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //这里是为了把环境变量加载到env里面
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      //验证加载的环境变量是否正确
      validationSchema,
    }),
    TypeOrmModule.forRoot(
      //这边前面已经验证过环境变量的类型了 所有这里我们的生成OrmConfig的类型可以确定
      ormConfigGenerator() as TypeOrmModuleOptions,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
