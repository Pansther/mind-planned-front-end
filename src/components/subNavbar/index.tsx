import React from 'react';
import { Link } from 'react-router-dom';

import { SubNavbarBox } from '../../styleds/subNavbar';
 
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
                        <Link to={menu.path} key={menu.id} className='menu-item-box'>
                            <p>{menu.name}</p>
                        </Link>
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
        name: 'Template',
        path: '/template/'
    },
    {
        id: 2,
        name: 'My Plan',
        path: '/my-plan/'
    },
    {
        id: 3,
        name: 'Search',
        path: '/search/'
    }
];