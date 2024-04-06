import { Body, Controller, Get, Inject, Patch, Post, Put } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './shelter.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import updateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseInput from './usecases/dtos/update.shelter.details.usecase.input';
import UpdateShelterDetailsUseCaseOutput from './usecases/dtos/update.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.updateShelterDetailsUseCase)
    private readonly updateShelterDetailUseCase: IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {
        return await this.getShelterDetailUseCase.run(null)
    }

    @Put()
    async updateShelterDetails(@Body() input: updateShelterControllerInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        const useCaseInput = new UpdateShelterDetailsUseCaseInput({ ...input });
        return await this.updateShelterDetailUseCase.run(useCaseInput);
    }
}