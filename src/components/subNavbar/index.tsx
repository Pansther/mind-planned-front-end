import React from 'react';
import { NavLink } from 'react-router-dom';

import { SubNavbarBox } from '../../styleds/subNavbar';
import { navbarMainColour } from '../../styleds/navbar';
 
const SubNavbar = (): React.ReactElement => {

    const [state = {
        loading: true
    }, setState] = React.useState();

    React.useEffect(() => {
        setState({ loading: false });
    }, []);

    return (
        <SubNavbarBox loading={state.loading}>
            <div className='menu-box'>
                {
                    subMenu!.map(menu => (
                        <NavLink 
                            to={menu.path} 
                            key={menu.id} 
                            className='menu-item-box'
                            activeStyle={{ color: `${navbarMainColour}` }}
                        >
                            <p>{menu.name}</p>
                        </NavLink>
                    ))
                }
            </div>
        </SubNavbarBox>
    );
}

export default SubNavbar;

const subMenu = [
    {
        id: 1,
        name: 'Store',
        path: '/store/'
    },
    {
        id: 2,
        name: 'Template',
        path: '/template/'
    },
    {
        id: 3,
        name: 'My Plan',
        path: '/my-plan/'
    }
];