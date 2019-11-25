import React from 'react';
import { IUser } from 'models/user';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import {
    AlignItemsTypes,
    ButtonColorTypes,
    ButtonTypes,
    ColorTypes,
    ComponentSizesTypes,
    FontSizeTypes,
    JustifyContentTypes,
    WeightTypes,
} from 'helpers/enums';
import { Description } from 'ui/Description';
import styled from 'styled-components';
import { theme } from 'helpers/theme';
import { Button } from 'ui/Button';
import { Icon } from 'ui/Icon';

interface IDialogHeader {
    user: IUser;
}

interface IDialogHeaderIndicator {
    isOnline: boolean;
}

const StyledDialogHeaderIndicator = styled(Row)<IDialogHeaderIndicator>`
    span {
        background-color: ${theme.colors.green};
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
`;

const DialogHeaderIndicator: React.FC<IDialogHeaderIndicator> = ({ isOnline }) => {
    if (isOnline) {
        return (
            <StyledDialogHeaderIndicator
                isOnline={isOnline}
                ai={AlignItemsTypes.center}
                jc={JustifyContentTypes.center}
            >
                <span />
                <Description mleft="5px" fontSize={FontSizeTypes.s} color={ColorTypes.grey}>
                    онлайн
                </Description>
            </StyledDialogHeaderIndicator>
        );
    }
    return null;
};

const StyledHeaderButton = styled(Button)`
    position: absolute !important;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 57px;
    height: 100%;
`;

const StyledDialogHeader = styled(Column)`
  height: 58px;
  border-bottom: 1px solid ${theme.colors.lightGrey};
`;

const DialogHeader = ({ user }) => {
    const { name, surName, isOnline } = user;
    const fullName = `${name} ${surName}`;
    return (
        <StyledDialogHeader jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            <Title mbottom="5px" weight={WeightTypes.w600}>
                {fullName}
            </Title>
            <DialogHeaderIndicator isOnline={isOnline} />
            <StyledHeaderButton
                buttonColor={ButtonColorTypes.fill}
                componentSize={ComponentSizesTypes.auto}
                onClick={() => console.log('here')}
                type={ButtonTypes.button}
            >
                <Icon name="more_horiz" size="28px" />
            </StyledHeaderButton>
        </StyledDialogHeader>
    );
};

export { DialogHeader };
