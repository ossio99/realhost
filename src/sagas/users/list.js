import { call, put } from 'redux-saga/effects'

import { actionTypes as userActions } from '../../features/users';

export default function* tryUsersList() {
    try {
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: userActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: userActions.LIST_FAILED })
    }
}

// import axios from "axios";

// export default class TodoService{
//     constructor(){
//         this.url = "https://jsonplaceholder.typicode.com/users";
//     }

//     async list(){
//         try{
//             return await axios.get(this.url);
//         }catch (error) {
//             throw error;
//         }
//     }
// }