import { IUser } from "./user";

export enum PetType {
    Cat = 'cat',
    Dog = 'dog'
}

export enum PetGender {
    Male = 'male',
    Female = 'female'
}
export interface IPet {

    _id: string;
    type: PetType;
    breed:string
    name: string;
    image:string
    gender:PetGender;
    age: number;
    location: string
    tel?: string;
    email:string;
    description : string;
    owner: IUser
    
}