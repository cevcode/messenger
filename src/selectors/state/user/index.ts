import { createStateSelector } from 'selectors/helpers';

const user = {
    user: createStateSelector('user.user'),
};

export { user };
