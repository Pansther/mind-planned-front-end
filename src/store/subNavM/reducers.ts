import { subNavM, subNavMActionType } from './types';

const initState: subNavM = {
    open: false
}

export default (
    state = initState,
    action: subNavMActionType
) => {
    switch (action.type) {
        case 'OPEN': {
            return {
                ...state,
                open: true
            };
        }

        case 'CLOSE': {
            return {
                ...state,
                open: false
            };
        }

        default :
            return state;
    }
}