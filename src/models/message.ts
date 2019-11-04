export interface IMessage {
    text: string;
    date: string;
    status: MessageStatus;
}

export enum MessageStatus {
    sent = 'sent',
    read = 'read',
    sending = 'sending',
}
