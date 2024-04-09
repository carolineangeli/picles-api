import { IsNotEmpty, IsNotIn, IsString, Max, maxLength } from "class-validator";

export default class createPetControllerInput{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    size: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    @maxLength(1024)
    bio: string;

}