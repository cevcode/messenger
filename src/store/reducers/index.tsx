import { combineReducers } from 'redux';
import { dialogsReducer } from './dialogs';
import { userReducer } from 'store/reducers/user';
import { messagesReducer } from 'store/reducers/messages';

export const rootReducer = combineReducers({
    user: userReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer,
});
