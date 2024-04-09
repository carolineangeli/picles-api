import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import { Pet } from "../schemas/pet.schema";
import PetTokens from "../pet.tokens";
import { privateDecrypt } from "crypto";
import IPetRepository from "../interfaces/pet.repository.interface";
import { sanitizeFilter } from "mongoose";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput> {
    
    constructor (
        @Inject(PetTokens.petRepository)
        private readonly petRepository:IPetRepository
    ){}

    async run (input:CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput>{
        const newPet = await this.petRepository.create(input)
        return new CreatePetUseCaseOutput({
            id: newPet._id,
            name: newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender: newPet.gender,
            bio: newPet.bio,
            photo: newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt,
        })
    }
}
