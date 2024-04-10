import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./update.put.by.id.usecase.input";
import UpdatePetByIdUseCaseOutput from "./update.put.by.id.usecase.output";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UpdatePetByIdUseCase implements IUseCase <UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>{
   async run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
}