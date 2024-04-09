import { InjectModel } from "@nestjs/mongoose"
import IPetRepository from "./interfaces/pet.repository.interface"
import { Pet } from "./schemas/pet.schema"
import { Model } from "mongoose"

export default class PetRepository implements IPetRepository{
    constructor(
        @InjectModel(Pet.name)
        private readonly PetModel: Model <Pet>,
     ) {}

   async create(data: Partial<Pet>): Promise<Pet>{
        return await this.PetModel.create({
            ...data,
            updatedAt: new Date (),
            createdAt: new Date ()
        })
    }
}