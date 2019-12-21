import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Selectors from 'selectors';
import { History } from 'history';
import { setUser } from 'store/reducers/user/actions';
import { setDialogs } from 'store/reducers/dialogs/actions';
import { setMessages } from 'store/reducers/messages/actions';
import { Column, Row } from 'ui/Layout';
import { DialogList } from 'widgets/DialogList';
import { MessageList } from 'widgets/MessageList';
import { DialogHeader } from 'widgets/DialogHeader';
import { MessageInput } from 'widgets/MessageInput';
import chatImage from 'assets/chat.svg';
import { IUser } from 'models/user';
import { IMessageList } from 'models/message';
import styled from 'styled-components';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, JustifyContentTypes, WeightTypes } from 'helpers/enums';
import { IDialog } from 'models/dialog';

export interface IHomePage {
    history: History;
    setUser: () => void;
    setDialogs: () => void;
    setMessages: () => void;
    dialogs: IDialog[];
    messageList: IMessageList[];
    user: IUser;
}

interface IDialogArea {
    isActive: boolean;
    user: IUser;
    messageList: IMessageList[];
}

const StyledDialogArea = styled(Column)`
  height: 100vh;
  img {
    width: 80px;
  }
`;

const DialogArea: React.FC<IDialogArea> = ({ isActive, user, messageList }) => {
    if (isActive) {
        return (
            <Column>
                <DialogHeader user={user} />
                <MessageList messageList={messageList} user={user} />
                <MessageInput />
            </Column>
        );
    }
    return (
        <StyledDialogArea ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
            <img src={chatImage} alt="chat-image" />
            <Description weight={WeightTypes.w600} color={ColorTypes.grey} mtop="10px">Откройте диалог</Description>
        </StyledDialogArea>
    );
};

const HomePage: React.FC<IHomePage> = ({ history, setUser, setDialogs, setMessages, user, dialogs, messageList }) => {
    useEffect(() => {
        setUser();
        setDialogs();
        setMessages();
    }, []);

    if(!dialogs.length || !messageList.length) {
        return <p>loading...</p>
    }
    return (
        <Row>
            <DialogList dialogs={dialogs} user={user} />
            <DialogArea isActive={false} user={user} messageList={messageList} />
        </Row>
    );
};

const ConnectedHomePage: any = connect(
    Selectors.combine({
        user: 'state.user.user',
        dialogs: 'state.dialogs.dialogs',
        messageList: 'state.messages.messageList',
    }),
    { setUser, setDialogs, setMessages }
)<any>(HomePage);

export { ConnectedHomePage as HomePage };
