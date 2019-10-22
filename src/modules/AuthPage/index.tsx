import React from 'react';
import { Auth } from 'widgets/Auth';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'helpers/enums';

const AuthPage = () => {
    return (
        <Column ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} height="100vh">
            <Auth />
        </Column>
    );
};

export { AuthPage };
