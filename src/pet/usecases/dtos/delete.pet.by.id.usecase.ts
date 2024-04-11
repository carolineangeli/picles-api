import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseOutput from "./delete.pet.by.id.usecase.output";
import DeletePetByIdUseCaseInput from "./delete.pet.by.id.usecase.input";


export default class DeletePetByIdUseCase implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>
{
    run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {
        throw new Error("Method not implemented.");
    }

}