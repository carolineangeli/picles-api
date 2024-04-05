import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDetailsUsecase from './usecases/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schemas';

@Module({
  controllers: [ShelterController],

  imports: [
    MongooseModule.forFeature([{ name: Shelter.name, schema: ShelterSchema }])
  ],

  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUsecase
    }
  ]
})
export class ShelterModule { }
