import CreatePetUseCaseOutput from "./create.pet.usecase.output"

export default class UpdatePetPhotoByIdUseCaseOutput extends CreatePetUseCaseOutput {
    id: string
    photoPath: string

    constructor (data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super(data)
        Object.assign(this, data)
    }
}