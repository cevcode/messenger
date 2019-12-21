import { SET_MESSAGES } from './types';
import { DEV_API_URL, request } from 'helpers/request';

export const setMessages = () => dispatch => {
    request('get', `${DEV_API_URL}/messageList`, null).then(res => {
        dispatch({
            type: SET_MESSAGES,
            payload: res.data,
        });
    })
};