import { IUser } from "./user";


export enum MessageType {
    Success,
    Error
  }


export interface Message {
    text: string,
    type: MessageType
  }


  export interface IUserMessage {
    username: IUser;
    text: string;
    date: string;
  }