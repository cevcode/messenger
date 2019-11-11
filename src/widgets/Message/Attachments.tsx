import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'ui/Layout';
import { IMessageAttachments } from 'models/message';

interface IMessageAttachmentsComponent {
    attachments: IMessageAttachments[] | null;
    isMe: boolean;
    single?: boolean;
}

const StyledMessageAttachmentsWrapper = styled(Row)<IMessageAttachmentsComponent>`
    width: auto;
    margin: ${props => (props.isMe ? '7px 35px 0 0' : '7px 0 0 35px')};
`;

const StyledMessageAttachmentsItem = styled(Column)<IMessageAttachmentsComponent>`
    display: flex;
    margin-right: 5px;
    &:first-child {
        margin-right: 0;
    }
    > img {
        width: ${props => (props.single ? '150px' : '40px')};
        height: ${props => (props.single ? '150px' : '40px')};
        border-radius: 5px;
    }
`;

const MessageAttachments: React.FC<IMessageAttachmentsComponent> = ({ attachments, isMe, single }) => {
    if (!attachments) {
        return null;
    }
    return (
        <StyledMessageAttachmentsWrapper isMe={isMe} attachments={attachments}>
            {attachments.map(item => {
                const { filename, url } = item;
                return (
                    <StyledMessageAttachmentsItem key={url} single={single} attachments={attachments} isMe={isMe}>
                        <img src={url} alt={filename} />
                    </StyledMessageAttachmentsItem>
                );
            })}
        </StyledMessageAttachmentsWrapper>
    );
};

export { MessageAttachments };
