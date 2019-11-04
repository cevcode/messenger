import React from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { Dialog } from 'widgets/Dialog';
import { Column } from 'ui/Layout';
import config from './config.json';


const StyledBox = styled(Column)`
  width: 300px;
`;

export interface IHomePage {
    history: History;
}

const HomePage: React.FC<IHomePage> = ({ history }) => {
    const { user, message, isMe }: any = config;
    return (
        <StyledBox>
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
            <Dialog user={user} message={message} unread={3} isMe={isMe} />
        </StyledBox>
    );
};

export { HomePage };
