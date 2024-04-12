export default class GetPetsUseCaseInput{
    type ?: string;
    size ?: string;
    gender ?: string;
    page ?: string;
    itemsPerPage ?: string;

    constructor(data: Partial<GetPetsUseCaseInput>){
        Object.assign(this, data)
    }
}