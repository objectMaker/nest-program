import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { moduleConfigGenerator, ormConfigGenerator } from '~/config';
import { TestModule } from './test/test.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      //这里是为了把环境变量加载到env里面
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      load: [moduleConfigGenerator],
    }),
    TestModule,
    TypeOrmModule.forRootAsync({
      useFactory: ormConfigGenerator as () => TypeOrmModuleOptions,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

console.log(ormConfigGenerator());
