import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'ui/Layout';
import { Photo } from 'widgets/Photo';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { IDialog } from 'models/dialog';
import { AlignItemsTypes, ColorTypes, FontSizeTypes, JustifyContentTypes, WeightTypes } from 'helpers/enums';
import { theme } from 'helpers/theme';
import { StatusLabel } from 'widgets/StatusLabel';
import { formatDate } from 'helpers/functions';


const StyledDialog = styled(Row)`
    border-bottom: 1px solid ${theme.colors.lightGrey};
    > * {
        flex-grow: 1;
    }
    :hover {
        background-color: #eee;
        cursor: pointer;
    }
`;

const StyledDescription = styled(Description)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
    display: block;
`;

const StyledUnreadLabel = styled(Description)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.red};
    border-radius: 50%;
`;

const StyledContent = styled(Column)`
    overflow: auto;
`;

const UnreadLabel = ({ unread, isMe }) => {
    if (isMe) {
        return null;
    }
    if (unread > 0) {
        return (
            <StyledUnreadLabel fontSize={FontSizeTypes.s} color={ColorTypes.white} padding="2px 7px">
                {unread}
            </StyledUnreadLabel>
        );
    }
    return null;
};

const Dialog: React.FC<IDialog> = ({ user, message, unread, isMe }) => {
    const { name, surName } = user;
    const userFullName = `${name} ${surName}`;
    if(message.isTyping) {
        return (
            <StyledDialog padding="10px" ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
                <Photo user={user} checkConnect />
                <StyledContent mleft="10px">
                    <Row jc={JustifyContentTypes.spaceBetween}>
                        <Title weight={WeightTypes.w600} mbottom="3px">
                            {userFullName}
                        </Title>
                    </Row>
                    <Row jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                        privet
                    </Row>
                </StyledContent>
            </StyledDialog>
        )
    } else {
        const { text, date, status } = message;
        return (
            <StyledDialog padding="10px" ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
                <Photo user={user} checkConnect/>
                <StyledContent mleft="10px">
                    <Row jc={JustifyContentTypes.spaceBetween}>
                        <Title weight={WeightTypes.w600} mbottom="3px">
                            {userFullName}
                        </Title>
                        <Description weight={WeightTypes.w400} color={ColorTypes.grey} fontSize={FontSizeTypes.s}>
                            {formatDate(date, true)}
                        </Description>
                    </Row>
                    <Row jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                        <StyledDescription weight={WeightTypes.w400} color={ColorTypes.grey} fontSize={FontSizeTypes.s}>
                            {text}
                        </StyledDescription>
                        <UnreadLabel unread={unread} isMe={isMe}/>
                        <StatusLabel status={status} isMe={isMe}/>
                    </Row>
                </StyledContent>
            </StyledDialog>
        );
    }
};

export { Dialog };
