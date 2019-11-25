import React, { useState } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { Dialog } from 'widgets/Dialog';
import { Column } from 'ui/Layout';
import { theme } from 'helpers/theme';
import { IUser } from 'models/user';
import { IDialog } from 'models/dialog';
import { DialogSearch } from 'widgets/DialogList/DialogSearch';

const StyledDialogList = styled(Column)`
    width: 400px;
    border-right: 1px solid ${theme.colors.lightGrey};
    height: 100vh;
`;

interface IDialogList {
    dialogs: IDialog[];
    user: IUser;
}

const DialogList: React.FC<IDialogList> = ({ dialogs, user }) => {
    const [inputValue, setValue] = useState('');
    let filtered = Array.from(dialogs);

    const onChangeInput = e => {
        const value = e.target.value;
        filtered = filtered.filter(dialog => dialog.user.name.indexOf(value) >= 0);
        setValue(e.target.value);
    }
    return (
        <StyledDialogList>
            <DialogSearch />
            <Scrollbars>
                {dialogs.map(item => {
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
                })}
            </Scrollbars>
        </StyledDialogList>
    );
};

export { DialogList };
