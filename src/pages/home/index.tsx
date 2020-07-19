import React from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { addUser, updateUser, delUser, ovwUser } from '../../store/user/actions';

import { PATH } from '../../api';
import { userGenPath } from '../../api/user';
  
const Home = (props: RootState): React.ReactElement => { 

    const dispatch = useDispatch();

    /// get user data.
    React.useEffect(() => {
        axios.get(`${PATH}${userGenPath}`)
        .then(res => { 
            dispatch(ovwUser(res.data));
        })
        // eslint-disable-next-line
    }, []);

    const mockUpUserData = {
        user_id: 1,
        name: 'Werawit Sirakunwat'
    };

    return (
        <div>
            <h1>Hello from Home.</h1>

            <button onMouseDown={() => { 
                const name = mockUpUserData.name;
                axios.post(`${PATH}${userGenPath}`, { name })
                .then(res => {
                    dispatch(addUser({ user_id: res.data.user_id, name })); 
                })
            }}>Add user</button>

            <button onMouseDown={() => { 
                axios.put(`${PATH}${userGenPath}`, mockUpUserData)
                .then(res => {
                    dispatch(updateUser(mockUpUserData));
                })
            }}>Update user</button>

            <button onMouseDown={() => {
                axios.delete(`${PATH}${userGenPath}${mockUpUserData.user_id}`)
                .then(res => {
                    dispatch(delUser(mockUpUserData.user_id))
                })
            }}>Del user</button>

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