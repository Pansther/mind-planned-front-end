// import { createStore } from 'redux';
import { combineReducers } from 'redux';

import userReducer from './user/reducers';

export const rootReducer = combineReducers ({
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>