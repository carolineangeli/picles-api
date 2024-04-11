
export default class DeletePetByIdUseCaseOutput{
    message: string = 'Successfully Deleted'

    constructor(data: Partial<DeletePetByIdUseCaseOutput>) {
        Object.assign(this, data);
    }
    
}