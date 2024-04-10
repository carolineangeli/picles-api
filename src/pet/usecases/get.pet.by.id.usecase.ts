import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./dtos/get.pet.by.id.usecase.input";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output";
import { Pet } from "../schemas/pet.schema";
import { Inject } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";

export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) { }

    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
        const pet = await this.GetPetById(input.id)

        if (pet === null) {
            throw new Error('Pet não Encontrado')
        }

        return new GetPetByIdUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: null,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt
        });
    }

    private async GetPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
            } catch (error) {
                return null
            }
        }
}