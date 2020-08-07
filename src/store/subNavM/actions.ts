import { OPEN, CLOSE } from './types';
import { subNavMActionType } from './types';

export const openSubNavM = (): subNavMActionType => ({
    type: OPEN
})

export const closeSubNavM = (): subNavMActionType => ({
    type: CLOSE
})