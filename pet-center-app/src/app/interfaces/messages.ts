

export enum MessageType {
    Success,
    Error
  }


export interface Message {
    text: string,
    type: MessageType
  }