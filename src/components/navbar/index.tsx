import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { NavbarBox } from '../../styleds/navbar';

import { openSubNavM, closeSubNavM } from '../../store/subNavM/actions';

const Navbar = (props?: RootState): React.ReactElement => { 
    
    const dispatch = useDispatch();

    function dropDownHandler() {
        if (props?.subNavM.open)
            dispatch(closeSubNavM());
        else    
            dispatch(openSubNavM());
    }

    return (
        <NavbarBox open={props?.subNavM.open}>
            <Link to='/' className='name-box'>
                <p>Mind Planned</p>
            </Link>
            <i className="fas fa-angle-down" onMouseDown={dropDownHandler}></i>
        </NavbarBox>
    );
}
 
const mapState = (state: RootState) => ({
    subNavM: state.subNavM
})

const NavBarConnected = connect(mapState)(Navbar);

export default NavBarConnected;