import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './shelter.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import updateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Get()
   async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput>{
   
    return await this.getShelterDetailUseCase.run(null)
    }

    @Patch()
    async updateShelterDetails(@Body() input: updateShelterControllerInput){
        console.log(input)
    }
}
