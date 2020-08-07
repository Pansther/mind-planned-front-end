import React from 'react';

import { MainGhostBtnProps } from './type';

import { MainGhostBtnBox } from '../../styleds/buttons';
 
export const MainGhostBtn = (props: MainGhostBtnProps): React.ReactElement => {
    return (
        <MainGhostBtnBox to={`${props.path}`}>
            <i className={`${props.icon} icon`}></i>
            {`${props.text}`}
        </MainGhostBtnBox>
    );
}