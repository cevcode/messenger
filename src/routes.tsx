export const routes =  [
    {
        path: ['/', '/login'],
        component: 'AuthPage',
        exact: true,
        data: {
            authType: 'signIn'
        }

    },
    {
        path: '/register',
        component: 'AuthPage',
        exact: true,
        data: {
            authType: 'signUp'
        }
    }
];