import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import ShelterTokens from "../shelter.tokens";
import IShelterRepository from "../interfaces/shelter.repository.interface";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput> {
   constructor(
      @Inject(ShelterTokens.shelterRepository)
      private readonly shelterRepository: IShelterRepository
   ) { }

   async run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
      await this.shelterRepository.update(input)

      const shelter = await this.shelterRepository.get()

      return new UpdateShelterDetailsUseCaseOutput({
         // Spread operator used here...
         // Properties mus have the same name as the field to be able to use Spread Operator
         // ...shelter
         name: shelter.name,
         phone: shelter.phone,
         whatsApp: shelter.whatsapp,
         email: shelter.email,
         updateAt: shelter.updateAt,
         createdAt: shelter.createAt
      })
   }
}