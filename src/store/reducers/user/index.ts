import { USER_SET } from './types';

const initialState = {
    user: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case USER_SET:
            return {
                user: action.payload,
            };

    }
};