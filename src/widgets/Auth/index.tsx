import React from 'react';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import { FontSizeTypes, WeightTypes } from 'helpers/enums';

const Auth = () => {
    return (
        <Column>
            <Title fontSize={FontSizeTypes.xxl} weight={WeightTypes.w400}>Войти в аккаунт</Title>
            <Description>Пожалуйста, войдите в свой аккаунт</Description>
            <Button onClick={() =>alert('enter')}>Войти</Button>
        </Column>
    )
};

export { Auth };