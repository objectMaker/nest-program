import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ormConfigGenerator, validationSchema } from '~/config';
import { TestModule } from './test/test.module';
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
    TypeOrmModule.forRootAsync({
      useFactory: ormConfigGenerator as () => TypeOrmModuleOptions,
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
