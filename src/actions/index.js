import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=youwildforthat';

export function getListData(){

    const resp = axios.get(BASE_URL + API_KEY);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp
    }
}