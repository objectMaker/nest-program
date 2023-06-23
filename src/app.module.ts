import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { moduleConfigGenerator } from '~/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      //这里是为了把环境变量加载到env里面
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      load: [moduleConfigGenerator],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log(moduleConfigGenerator(), 'configkkk');
