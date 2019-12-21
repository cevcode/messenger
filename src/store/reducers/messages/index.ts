import { SET_MESSAGES } from './types';

const initialState = {
    messageList: [],
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_MESSAGES:
            return {
                messageList: action.payload
            };

    }
};