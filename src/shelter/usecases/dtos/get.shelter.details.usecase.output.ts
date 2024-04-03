export default class GetShelterDetailsUseCaseOutput {
    shelterName: string
    shelterWhatsApp: string
    shelterEmail: string
    shelterPhone: string
    createAt: Date
    UpdateAt: Date
    constructor(data:Partial<GetShelterDetailsUseCaseOutput>){
        Object.assign(this,data)
    }
    
}