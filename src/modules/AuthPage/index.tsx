import React from 'react';
import { Auth } from 'widgets/Auth';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'helpers/enums';
import { History } from 'history';

export interface IAuthPage {
    authType: 'signIn' | 'signOut';
    history: History
}

const AuthPage: React.FC<IAuthPage> = ({ history, authType }) => {
    return (
        <Column ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} height="100vh">
            <Auth authType={authType} history={history} />
        </Column>
    );
};

export { AuthPage };
