import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { Message } from 'widgets/Message';
import { Column } from 'ui/Layout';
import { IMessageList } from 'models/message';
import { IUser } from 'models/user';

interface IMessageListComponent {
    messageList: IMessageList[];
    user: IUser;
}

const StyledMessageList = styled(Scrollbars)`
    height: calc(100vh - (57px * 2)) !important;
`;

const MessageList: React.FC<IMessageListComponent> = ({ messageList, user }) => {
    return (
        <StyledMessageList>
            <Column padding="10px 15px">
                {messageList.map(item => {
                    const { message } = item;
                    return (
                        <Message
                            user={message.user}
                            key={message.id}
                            message={message}
                            isMe={message.user.id === user.id}
                        />
                    );
                })}
            </Column>
        </StyledMessageList>
    );
};

export { MessageList };
