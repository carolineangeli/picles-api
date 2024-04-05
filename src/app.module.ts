import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();

@Module({
  imports: [ShelterModule, MongooseModule.forRoot(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@piclescluster.e9urls1.mongodb.net/picles?retryWrites=true&w=majority&appName=Piclescluster`
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
