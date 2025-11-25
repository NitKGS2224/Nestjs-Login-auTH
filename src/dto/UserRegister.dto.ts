import {IsString, IsEmail} from "class-validator"


export class UserRegisterDto {

@IsString()
fname: string;
@IsString()
lname : string;
@IsEmail()
email : string ;
@IsString()
password :string  ;
}