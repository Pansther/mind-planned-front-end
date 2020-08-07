import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { SubNavbarBigBox, SubNavbarBox } from '../../styleds/subNavbar';
import { navbarMainColour } from '../../styleds/navbar';

import { RootState } from '../../store';
 
const SubNavbar = (props?: RootState): React.ReactElement => {

    const [state = {
        isLoading: true, 
    }, setState] = React.useState();

    React.useEffect(() => {
        setState({ 
            ...state, 
            isLoading: false,
        }); 
        // eslint-disable-next-line
    }, []);
  
    return (
        <SubNavbarBigBox open={props?.subNavM.open}>
            <SubNavbarBox isLoading={state.isLoading} open={props?.subNavM.open}>
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
        </SubNavbarBigBox>
    );
}

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

const mapState = (state: RootState) => ({
    subNavM: state.subNavM
})

const SubNavbarConnected = connect(mapState)(SubNavbar);

export default SubNavbarConnected; 