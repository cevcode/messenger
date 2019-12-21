import React, { useState } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { Dialog } from 'widgets/Dialog';
import { Column } from 'ui/Layout';
import { theme } from 'helpers/theme';
import { IUser } from 'models/user';
import { IDialog } from 'models/dialog';
import { DialogSearch } from 'widgets/DialogList/DialogSearch';
import searchImage from 'assets/search.svg';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, JustifyContentTypes, WeightTypes } from 'helpers/enums';

const StyledDialogList = styled(Column)`
    width: 400px;
    border-right: 1px solid ${theme.colors.lightGrey};
    height: 100vh;
`;

interface IDialogList {
    dialogs: IDialog[];
    user: IUser;
}

interface IRenderDialogListArea {
    filtered: IDialog[];
    user: IUser;
}

const StyledRenderDialogListArea = styled(Column)`
  height: 80vh;
  img {
    width: 80px;
  }
`;

// @ts-ignore
const RenderDialogListArea: React.FC<IRenderDialogListArea> = ({ filtered, user }) => {
    if (filtered.length) {
        return filtered
            .sort((a, b) => b.message.date - a.message.date)
            .map(item => {
                const { message, id, unread } = item;
                return (
                    <Dialog
                        key={id}
                        id={id}
                        user={item.user}
                        message={message}
                        unread={unread}
                        isMe={user.id === item.user.id}
                    />
                );
            });
    }
    return (
        <StyledRenderDialogListArea jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            <img src={searchImage} alt="search-image" />
            <Description mtop="10px" color={ColorTypes.grey} weight={WeightTypes.w600}>Диалог не найден</Description>
        </StyledRenderDialogListArea>
    );
};

const DialogList: React.FC<IDialogList> = ({ dialogs, user }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filtered, setFilteredItems] = useState(dialogs);

    const onSearch = (value: React.SetStateAction<string>) => {
        if (typeof value === 'string') {
            setFilteredItems(
                dialogs.filter(dialog => dialog.user.name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
            );
        }
        setSearchValue(value);
    };
    return (
        <StyledDialogList>
            <DialogSearch onSearch={onSearch} searchValue={searchValue} />
            <Scrollbars>
                <RenderDialogListArea filtered={filtered} user={user} />
            </Scrollbars>
        </StyledDialogList>
    );
};

export { DialogList };
