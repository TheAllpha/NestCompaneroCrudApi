import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanerosModule } from './companeros/companeros.module';

@Module({
  imports: [CompanerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
