import React from 'react';
import { History } from 'history';
import { Column, Row } from 'ui/Layout';
import config from './config.json';
import { Message } from 'widgets/Message';
import { DialogList } from 'widgets/DialogList';
import { MessageList } from 'widgets/MessageList';
import { DialogHeader } from 'widgets/DialogHeader';
import { MessageInput } from 'widgets/MessageInput';

export interface IHomePage {
    history: History;
}

const HomePage: React.FC<IHomePage> = ({ history }) => {
    const { user, messageList, dialogs }: any = config;
    return (
        <Row>
            <DialogList dialogs={dialogs} user={user} />
            <Column>
                <DialogHeader user={user} />
                <MessageList messageList={messageList} user={user} />
                <MessageInput />
            </Column>
        </Row>
    );
};

export { HomePage };
