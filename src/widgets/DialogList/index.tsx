import React from 'react';
import styled from 'styled-components';
import { Dialog } from 'widgets/Dialog';
import { Column } from 'ui/Layout';
import { theme } from 'helpers/theme';
import { IUser } from 'models/user';
import { IDialog } from 'models/dialog';

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
    return (
        <StyledDialogList>
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
        </StyledDialogList>
    );
};

export { DialogList };
