import { Pet } from "../schemas/pet.schema";
import GetPetsUseCaseInput from "../usecases/dtos/get.pets.usecase.input";
import FindByFilterAndTotal from "../usecases/find.by.filter.and.total";

export default interface IPetRepository{
    create(data: Partial<Pet>) :Promise<Pet>
    getById(id: string):Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    deleteById (id :string) : Promise<void>
    findByFilter(input: GetPetsUseCaseInput): Promise<FindByFilterAndTotal>
}