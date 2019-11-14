import { IUser } from 'models/user';

export interface IMessage {
    id: string;
    text: string;
    date: number;
    status: MessageStatus;
    attachments: IMessageAttachments[] | null,
    user: IUser,
    isTyping: boolean,
    audio: string,
}

export enum MessageStatus {
    sent = 'sent',
    read = 'read',
    sending = 'sending',
}

export interface IMessageAttachments {
    filename: string,
    url: string
}
