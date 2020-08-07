// import { createStore } from 'redux';
import { combineReducers } from 'redux';

import userReducer from './user/reducers';
import subNavMReducer from './subNavM/reducers';

export const rootReducer = combineReducers ({
    users: userReducer,
    subNavM: subNavMReducer
})

export type RootState = ReturnType<typeof rootReducer>