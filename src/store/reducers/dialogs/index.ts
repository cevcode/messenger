import { SET_DIALOGS } from './types';

const initialState = {
    dialogs: [],
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_DIALOGS:
            return {
                dialogs: action.payload
            };

    }
};