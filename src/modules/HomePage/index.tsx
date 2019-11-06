import React from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { Dialog } from 'widgets/Dialog';
import { Column, Row } from 'ui/Layout';
import config from './config.json';
import { Message } from 'widgets/Message';

const StyledDialogList = styled(Column)`
    width: 400px;
`;

export interface IHomePage {
    history: History;
}

const HomePage: React.FC<IHomePage> = ({ history }) => {
    const { user, messageList }: any = config;
    const lastMessage = messageList[messageList.length - 1].message;
    return (
        <Row>
            <StyledDialogList>
                <Dialog user={lastMessage.user} message={lastMessage} unread={3} isMe={false} />
            </StyledDialogList>
            <Column>
                {messageList.map(item => {
                    const { message } = item;
                    return (
                        <Message user={message.user} message={message} isMe={message.user.id === user.id} />
                    )
                })}
            </Column>
        </Row>
    );
};

export { HomePage };
