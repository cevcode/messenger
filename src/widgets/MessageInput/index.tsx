import React, { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import { ButtonColorTypes, ButtonTypes, ColorTypes, ComponentSizesTypes, InputTypes } from 'helpers/enums';
import { Column } from 'ui/Layout';
import { Button } from 'ui/Button';
import config from './config.json';
import styled from 'styled-components';
import { Icon } from 'ui/Icon';
import { Input } from 'ui/Input';
import { theme } from 'helpers/theme';

const StyledMessageInput = styled(Column)`
    width: 100%;
    position: relative;
    form {
        width: 100%;
    }
    input {
        padding: 0 57px;
        width: 100%;
        position: relative;
        border: none;
        border-top: 1px solid ${theme.colors.lightGrey};
        height: 57px;
        ${theme.fonts.default};
        font-size: 15px;
        &:focus {
            outline: none;
        }
    }
    button {
        position: absolute;
        top: 0;
        left: 0;
        &:hover {
            i {
                color: ${theme.colors.blue};
            }
        }
    }
    .react-ripples {
        z-index: 2;
        top: 0;
        right: 0;
        position: absolute !important;
        width: 57px;
        height: 57px;
        * {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 57px;
            width: 57px;
        }
        &:first-child {
            left: 0;
        }
        &:nth-child(3) {
            right: 57px;
        }
    }
`;

const MessageInput = () => {
    const [value, setValue] = useState('');
    const onSubmit = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, actions) => onSubmit(values, actions)}
            render={(props: FormikProps<any>) => {
                const { type, placeholder, name } = config;
                return (
                    <StyledMessageInput>
                        <form onSubmit={props.handleSubmit}>
                            <Button
                                type={ButtonTypes.button}
                                onClick={() => console.log('here')}
                                buttonColor={ButtonColorTypes.fill}
                                componentSize={ComponentSizesTypes.auto}
                            >
                                <Icon name="attach_file" size="24px" />
                            </Button>
                            <input
                                key={name}
                                autoComplete="off"
                                value={value}
                                id={name}
                                onChange={e => setValue(e.target.value)}
                                color={ColorTypes.default}
                                type={InputTypes.text}
                                placeholder={placeholder}
                                name={name}
                            />
                            <Button
                                type={ButtonTypes.button}
                                onClick={() => console.log('here')}
                                buttonColor={ButtonColorTypes.fill}
                                componentSize={ComponentSizesTypes.auto}
                            >
                                <Icon name="mood" size="24px" />
                            </Button>
                            <Button
                                type={ButtonTypes.submit}
                                onClick={props.handleSubmit}
                                buttonColor={ButtonColorTypes.fill}
                                componentSize={ComponentSizesTypes.auto}
                            >
                                <Icon name={value ? 'send': 'settings_voice'} size="24px" />
                            </Button>
                        </form>
                    </StyledMessageInput>
                );
            }}
        />
    );
};

export { MessageInput };
