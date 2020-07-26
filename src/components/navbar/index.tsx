import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarBox } from '../../styleds/navbar';

const Navbar = (): React.ReactElement => {
    return (
        <NavbarBox>
            <Link to='/' className='name-box'>
                <p>- Mind Planned -</p>
            </Link>
        </NavbarBox>
    );
}

export default Navbar;