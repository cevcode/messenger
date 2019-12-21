import axios from 'axios';
import { IRequest } from 'models/request';

const API_METHODS = {
    get: axios.get,
    post: axios.post,
    default: axios.get,
};

export function request(method, api, params) {
    return API_METHODS[method](api, params);
}

export const DEV_API_URL = 'http://localhost:9999';
