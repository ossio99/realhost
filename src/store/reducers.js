import {combineReducers} from 'redux';

import usersReducer, {NAME as usersName} from '../features/users';

export default () => 
    combineReducers({
    [usersName]: usersReducer,
});