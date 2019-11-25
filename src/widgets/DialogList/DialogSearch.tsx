import React, { useState } from 'react';
import { Row } from 'ui/Layout';
import { Icon } from 'ui/Icon';
import { AlignItemsTypes, ButtonTypes, ColorTypes, InputTypes } from 'helpers/enums';
import styled from 'styled-components';
import { Input } from 'ui/Input';
import { Button } from 'ui/Button';

const StyledNewMessage = styled(Button)`
    button {
        background-color: transparent;
    }
    border: none;
    display: flex;
    border-radius: 5px;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    outline: none;
    width: 50px;
`;

const StyledSearchInput = styled(Input)`
    border: none;
    border-radius: 5px;
    background-color: #f7f7f7;
`;

const DialogSearch = () => {
    const [searchClicked, setSearchClicked] = useState(false);
    return (
        <Row ai={AlignItemsTypes.center} padding="15px 10px">
            <StyledSearchInput
                value=""
                name="search-dialogs"
                color={ColorTypes.grey}
                onFocus={() => setSearchClicked(true)}
                onBlur={() => setSearchClicked(false)}
                id="search-dialogs"
                placeholder="Поиск"
                icon="search"
                type={InputTypes.search}
            />
            {!searchClicked && (
                <StyledNewMessage onClick={() => console.log('clicked')} type={ButtonTypes.button}>
                    <Icon name="edit" size="24px" color={ColorTypes.grey} />
                </StyledNewMessage>
            )}
        </Row>
    );
};

export { DialogSearch };
