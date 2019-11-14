import React from 'react';
import styled, { css } from 'styled-components';
import { Column, Row } from 'ui/Layout';
import { Photo } from 'widgets/Photo';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, FontSizeTypes } from 'helpers/enums';
import { theme } from 'helpers/theme';
import { StatusLabel } from 'widgets/StatusLabel';
import { formatDate } from 'helpers/functions';
import { IMessage } from 'models/message';
import { IUser } from 'models/user';
import { MessageAttachments } from 'widgets/Message/Attachments';
import { Typing } from 'widgets/Typing';
import { AudioMessage } from 'widgets/Message/AudioMessage';

interface IStyledMessageWrapper {
    isMe: boolean;
}

const StyledMessageWrapper = styled(Column)<IStyledMessageWrapper>`
    margin-top: 10px;
    > p {
        margin: 7px 0 0 35px;
    }
    i {
        margin-right: 5px;
    }
    ${props =>
        props.isMe &&
        css`
            align-items: flex-end;
            > div {
                flex-direction: row-reverse;
            }
            > p {
                margin: 7px 35px 0 0;
            }
        `}
`;

const StyledMessage = styled(Column)<IStyledMessageWrapper>`
    background-color: ${theme.colors.blue};
    > p {
        color: ${theme.colors.white};
    }
    border-radius: 10px 10px 10px 0;
    max-width: 40%;
    padding: 15px 10px;
    width: auto;
    margin: 0 0 0 10px;
    overflow: hidden;
    ${props =>
        props.isMe &&
        css`
            border-radius: 10px 10px 0 10px;
            margin: 0 10px 0 0;
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.colors.lightGrey};
            > p {
                color: ${theme.colors.black};
            }
        `}
`;

interface IMessageComponent {
    message: IMessage;
    user: IUser;
    isMe: boolean;
}

const Message: React.FC<IMessageComponent> = ({ user, message, isMe }) => {
    if (message.isTyping) {
        return (
            <StyledMessageWrapper isMe={isMe}>
                <Row ai={AlignItemsTypes.flexEnd}>
                    <Photo user={user} size="25px" />
                    <StyledMessage isMe={isMe}>
                        <Typing />
                    </StyledMessage>
                </Row>
            </StyledMessageWrapper>
        );
    }
    if (message.audio) {
        const { status, date, audio } = message;
        return (
            <StyledMessageWrapper isMe={isMe}>
                <Row ai={AlignItemsTypes.flexEnd}>
                    <Photo user={user} size="25px" />
                    <StyledMessage isMe={isMe}>
                        <AudioMessage audio={audio} />
                    </StyledMessage>
                    <StatusLabel isMe={isMe} status={status} />
                </Row>
                <Description fontSize={FontSizeTypes.s}>{formatDate(date, false)}</Description>
            </StyledMessageWrapper>
        );
    }
    const { text, date, status, attachments } = message;
    return (
        <StyledMessageWrapper isMe={isMe}>
            <Row ai={AlignItemsTypes.flexEnd}>
                <Photo user={user} size="25px" />
                <StyledMessage isMe={isMe}>
                    <Description color={ColorTypes.white}>{text}</Description>
                </StyledMessage>
                <StatusLabel isMe={isMe} status={status} />
            </Row>
            <MessageAttachments isMe={isMe} attachments={attachments} />
            <Description fontSize={FontSizeTypes.s}>{formatDate(date, false)}</Description>
        </StyledMessageWrapper>
    );
};

export { Message };
