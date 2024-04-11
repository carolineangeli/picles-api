import { InjectModel } from "@nestjs/mongoose"
import IPetRepository from "./interfaces/pet.repository.interface"
import { Pet } from "./schemas/pet.schema"
import { Model } from "mongoose"

export default class PetRepository implements IPetRepository{
    constructor(
        @InjectModel(Pet.name)
        private readonly petModel: Model <Pet>,
     ) {}

     async getById(id: string): Promise<Pet> {
        return await this.petModel.findById(id)
         
     }

   async create(data: Partial<Pet>): Promise<Pet>{
        return await this.petModel.create({
            ...data,
            updatedAt: new Date (),
            createdAt: new Date ()
        })
    }

    async updateById(data: Partial<Pet>): Promise<void>{
        await this.petModel.updateOne(
        {
            _id: data._id, 
        },{
            ...data,
            updatedAt: new Date()
        }
    )
    }

    async deleteById (id :string) : Promise<void>{
     await this.petModel.findByIdAndDelete(id)
    }
}
