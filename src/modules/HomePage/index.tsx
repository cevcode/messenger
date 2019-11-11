import React from 'react';
import { History } from 'history';
import { Column, Row } from 'ui/Layout';
import config from './config.json';
import { Message } from 'widgets/Message';
import { DialogList } from 'widgets/DialogList';


export interface IHomePage {
    history: History;
}

const HomePage: React.FC<IHomePage> = ({ history }) => {
    const { user, messageList, dialogs }: any = config;
    return (
        <Row>
            <DialogList dialogs={dialogs} user={user} />
            <Column padding="10px 15px">
                {messageList.map(item => {
                    const { message } = item;
                    return (
                        <Message user={message.user} key={message.id} message={message} isMe={message.user.id === user.id} />
                    )
                })}
            </Column>
        </Row>
    );
};

export { HomePage };
