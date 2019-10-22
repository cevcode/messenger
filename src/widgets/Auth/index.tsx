import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Box } from 'ui/Box';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import { ColorTypes, FontSizeTypes, PositionTypes, WeightTypes } from 'helpers/enums';
import { Input } from 'ui/Input';
import { Field } from 'widgets/Fields';

const Auth = () => {
    const onSubmit = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };
    return (
        <Formik
            initialValues={{ firstName: '', password: '' }}
            onSubmit={(values, actions) => onSubmit(values, actions)}
            render={(props: FormikProps<any>) => (
                <form onSubmit={props.handleSubmit}>
                    <Box padding="40px" width="450px">
                        <Title fontSize={FontSizeTypes.l} weight={WeightTypes.w500} position={PositionTypes.center}>
                            Войти в аккаунт
                        </Title>
                        <Description marginTop="10px" position={PositionTypes.center} color={ColorTypes.grey}>
                            Пожалуйста, войдите в свой аккаунт
                        </Description>
                        <Field icon="face" type="email" label="Ваше имя" name="firstName" Component={Input} />
                        <Field type="password" label="Пароль" name="password" Component={Input} />
                        <Button marginTop="20px" onClick={props.handleSubmit}>
                            Войти
                        </Button>
                    </Box>
                </form>
            )}
        />
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
