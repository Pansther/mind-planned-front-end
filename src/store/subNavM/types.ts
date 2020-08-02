export interface subNavM {
    open: boolean
}

export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

interface openSubNavMAction {
    type: typeof OPEN
}

interface closeSubNavMAction {
    type: typeof CLOSE
}

export type subNavMActionType = openSubNavMAction | closeSubNavMAction;