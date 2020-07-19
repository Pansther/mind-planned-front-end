import React from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { addUser, updateUser, delUser, ovwUser } from '../../store/user/actions';

import { PATH } from '../../api';
import { getUser } from '../../api/user';
  
const Home = (props: RootState): React.ReactElement => { 

    const dispatch = useDispatch();

    /// get user data.
    React.useEffect(() => {
        axios.get(`${PATH}${getUser}`)
        .then(res => { 
            dispatch(ovwUser(res.data));
        })
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Hello from Home.</h1>
            <button onMouseDown={() => dispatch(addUser({ user_id: 1, name: 'love' }))}>Add user</button>
            <button onMouseDown={() => dispatch(updateUser({ user_id: 1, name: 'XXXXX' }))}>Update user</button>
            <button onMouseDown={() => dispatch(delUser(1))}>Del user</button>
            {
                props.users.users!.map((user, index) => (
                    <h1 key={index}>{`${user.user_id} ${user.name}`}</h1>
                ))
            }
        </div>
    );
}

const mapState = (state: RootState) => ({
    users: state.users
})

const HomeWithConnect = connect(mapState)(Home);

export default HomeWithConnect;