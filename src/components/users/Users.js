import { UserItem }from './UserItem';
import React from 'react'
import { Spinner } from '../layout/Spinner';
import PropTypes from 'prop-types';



const Users = ({loading, users}) => {
    if(loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => <UserItem user={user} key={user.id}/>)}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}

export default Users
