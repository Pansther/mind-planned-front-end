import { ADD_USER, UPDATE_USER, DEL_USER, OVW_USER } from './types';
import { UserState, UserActionType } from './types';

const initState: UserState = {
    users: []
}

export default (
    state = initState,
    action: UserActionType
): UserState => {
    switch (action.type) {
        case ADD_USER: {
            return { 
                ...state,
                users: [
                    ...state.users,
                    action.user_data
                ]
            }
        }

        case UPDATE_USER: {
            return {
                ...state,
                users: state.users!.map(user => {
                    if (user.user_id === action.user_data.user_id)
                        return {
                            ...user,
                            name: action.user_data.name
                        };
                    else
                        return user;
                })
            }
        }

        case DEL_USER: {
            return {
                ...state,
                users: state.users!.filter(user => ( user.user_id !== action.user_id ))
            }
        }

        case OVW_USER: {
            return {
                ...state,
                users: action.user_list
            }
        }

        default:
            return state;
    }
}