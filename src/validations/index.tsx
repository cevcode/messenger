import * as Yup from 'yup';

const passwordValidation = () => {
    return Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .max(50, 'Слишком длинный пароль')
        .matches(/[A-z\u00C0-\u00ff]+/, 'Доступны только латинские символы')
        .matches(/[a-zA-Zа-яА-Я]+/ && /\d+/, 'Пароль должен содержать минимум одну цифру и одну букву')
        .required('Обязательное поле');
};

const emailValidation = () => {
    return Yup.string()
        .email('Неверный формат')
        .required('Обязательное поле')
};

const loginValidation = () => {
    return Yup.string()
        .min(6, 'Логин должен содержать минимум 6 символов')
        .max(16, 'Слишком длинный логин')
        .matches(/^[a-zA-Z0-9]+$/, 'Логин может содержать только латинские буквы и цифры')
        .required('Обязательное поле');
};

export const SignupSchema = Yup.object().shape({
    email: emailValidation(),
    login: loginValidation(),
    password: passwordValidation()
});
