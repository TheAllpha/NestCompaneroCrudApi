import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanerosModule } from './companeros/companeros.module';


@Module({
  imports: [CompanerosModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/mydb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
