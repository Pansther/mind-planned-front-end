import { ADD_USER, UPDATE_USER, DEL_USER, OVW_USER } from './types';
import { User, UserActionType } from './types';

export const addUser = (user_data: User): UserActionType => ({
    type: ADD_USER,
    user_data
})

export const updateUser = (user_data: User): UserActionType => ({
    type: UPDATE_USER,
    user_data
})

export const delUser = (user_id: number): UserActionType => ({
    type: DEL_USER,
    user_id
})

export const ovwUser = (user_list: User[]): UserActionType => ({
    type: OVW_USER,
    user_list
})