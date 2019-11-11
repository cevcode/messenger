import { IUser } from 'models/user';

export interface IMessage {
    id: string;
    text: string;
    date: number;
    status: MessageStatus;
    attachments: IMessageAttachments[] | null,
    user: IUser,
    isTyping: boolean,
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
