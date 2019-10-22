import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Box } from 'ui/Box';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import {
    ButtonColorTypes,
    ColorTypes,
    ComponentSizesTypes,
    FontSizeTypes,
    PositionTypes,
    WeightTypes,
} from 'helpers/enums';
import { Input } from 'ui/Input';
import { Field } from 'widgets/Fields';
import { SignupSchema } from 'validations';

const Auth = () => {
    const onSubmit = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };
    return (
        <Box padding="40px" width="450px">
            <Formik
                initialValues={{ email: '', password: '', login: '' }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => onSubmit(values, actions)}
                render={(props: FormikProps<any>) => (
                    <form onSubmit={props.handleSubmit}>
                        <Title fontSize={FontSizeTypes.l} weight={WeightTypes.w500} position={PositionTypes.center}>
                            Войти в аккаунт
                        </Title>
                        <Description margin="10px 0 60px 0" position={PositionTypes.center} color={ColorTypes.grey}>
                            Пожалуйста, войдите в свой аккаунт
                        </Description>
                        <Field
                            icon="account_circle"
                            color={ColorTypes.blue}
                            type="text"
                            placeholder="Введите логин"
                            marginTop="20px"
                            name="login"
                            Component={Input}
                        />
                        <Field
                            icon="email"
                            color={ColorTypes.blue}
                            type="email"
                            marginTop="20px"
                            placeholder="Введите email"
                            name="email"
                            Component={Input}
                        />
                        <Field
                            icon="lock"
                            color={ColorTypes.blue}
                            type="password"
                            placeholder="Пароль"
                            marginTop="20px"
                            name="password"
                            Component={Input}
                        />
                        <Button marginTop="40px" componentSize={ComponentSizesTypes.full} onClick={props.handleSubmit}>
                            Войти
                        </Button>
                        <Button marginTop="20px" buttonColor={ButtonColorTypes.fill} componentSize={ComponentSizesTypes.full} onClick={props.handleSubmit}>
                            Зарегистрироваться
                        </Button>
                    </form>
                )}
            />
        </Box>
    );

    // return (
    //     <Formik
    //         initialValues={{}}
    //         onSubmit={(values, { setSubmitting }) => {
    //             setTimeout(() => {
    //                 alert(JSON.stringify(values, null, 2));
    //                 setSubmitting(false);
    //             }, 400);
    //         }}
    //         render={props => {
    //             return (
    //                 <Box padding="20px" width="450px">
    //                     <Title fontSize={FontSizeTypes.xl} weight={WeightTypes.w400}>Войти в аккаунт</Title>
    //                     <Description marginTop="10px">Пожалуйста, войдите в свой аккаунт</Description>
    //                     <Button onClick={() =>alert('enter')}>Войти</Button>
    //                 </Box>
    //             )
    //         }}
    //     />
    // )
};

export { Auth };
