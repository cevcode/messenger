import { IUser } from 'models/user';
import { IMessage } from 'models/message';

export interface IDialogList {

}

export interface IDialog {
    user: IUser;
    id: string;
    message: IMessage;
    unread: number;
    isMe: boolean;
}