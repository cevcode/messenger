import React from 'react';
import styled, { css } from 'styled-components';
import { Column, Row } from 'ui/Layout';
import { Photo } from 'widgets/Photo';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, FontSizeTypes } from 'helpers/enums';
import { theme } from 'helpers/theme';
import { StatusLabel } from 'widgets/StatusLabel';

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
    ${props => props.isMe && css`
      border-radius: 10px 10px 0 10px;
      margin: 0 10px 0 0;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.lightGrey};
      >p {
        color: ${theme.colors.black};
      }
    `}
`;

const Message = ({ user, message, isMe }) => {
    const { text, date, status } = message;
    return (
        <StyledMessageWrapper isMe={isMe}>
            <Row ai={AlignItemsTypes.flexEnd}>
                <Photo user={user} size="25px" />
                <StyledMessage isMe={isMe}>
                    <Description color={ColorTypes.white}>{text}</Description>
                </StyledMessage>
                <StatusLabel isMe={isMe} status={status} />
            </Row>
            <Description fontSize={FontSizeTypes.s}>
                {date}
            </Description>
        </StyledMessageWrapper>
    );
};

export { Message };
