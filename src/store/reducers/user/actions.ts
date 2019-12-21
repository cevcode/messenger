import { USER_SET } from './types';
import { DEV_API_URL, request } from 'helpers/request';

export const setUser = () => dispatch => {
    request('get', `${DEV_API_URL}/user`, null).then(res => {
        dispatch({
            type: USER_SET,
            payload: res.data,
        });
    })
};