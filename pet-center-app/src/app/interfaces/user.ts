import { IPet } from "./pet";


export interface IUser {

    _id: string;
    tel?: string;
    email:string;
    username: string;
    location: string,
    favorites: string;
    messages: [username:string, text:string, postedOn:string]
    
    
}





