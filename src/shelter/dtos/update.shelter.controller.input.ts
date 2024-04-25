import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, isNotEmpty } from "class-validator"

export default class updateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsNotEmpty()
    @IsString()
    @Length(10,11)
    whatsApp: string
   
    @IsString()
    @IsNumberString()
    @Length(10,11)
    phone: string
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}