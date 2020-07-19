export interface User {
    user_id: number
    name: string
}

export interface UserState {
    users: User[]
}

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DEL_USER = 'DEL_USER';
export const OVW_USER = 'OVW_USER';

interface addUserAction {
    type: typeof ADD_USER
    user_data: User
}

interface updateUserAction {
    type: typeof UPDATE_USER
    user_data: User
}

interface delUserAction {
    type: typeof DEL_USER
    user_id: number
}

interface ovwUserAction {
    type: typeof OVW_USER
    user_list: User[]
}

export type UserActionType = addUserAction
    | updateUserAction | delUserAction | ovwUserAction;
