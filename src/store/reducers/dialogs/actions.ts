import { SET_DIALOGS } from './types';
import { DEV_API_URL, request } from 'helpers/request';

export const setDialogs = () => dispatch => {
    request('get', `${DEV_API_URL}/dialogs`, null).then(res => {
        dispatch({
            type: SET_DIALOGS,
            payload: res.data,
        });
    })
};