import React, { Component } from 'react'
import { UserItem }from './UserItem';

export class Users extends Component {
    state = {
        users: [
            {
                login: 'pjhyett',
                id: 3,
                avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            },
            {
                login: 'wycats',
                id: 4,
                avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
                html_url: 'https://github.com/wycats'
            },
            {
                login: 'ezmobius',
                id: 5,
                avatar_url: 'https://avatars0.githubusercontent.com/u/5?v=4',
                html_url: 'https://github.com/ezmobius'
            },
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => <UserItem user={user} key={user.id}/>)}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
