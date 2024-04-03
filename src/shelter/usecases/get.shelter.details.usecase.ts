import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUsecase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    // throw new Error("Method not implemented.");
    return Promise.resolve(new GetShelterDetailsUseCaseOutput({
      shelterName: 'Bixinhos',
      shelterEmail: 'bixinhos@gmail.com',
      shelterPhone: '19981728823',
      shelterWhatsApp: '19981728823',
      createAt: new Date(),
      UpdateAt: new Date()
    }))
  }
}