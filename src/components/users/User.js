import React, { useState, useEffect } from 'react'
import { Spinner } from '../layout/Spinner';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Repos from '../repos/Repos';


const User = ({match, loading, user, repos, getUserRepos, getUser}) => {


    useEffect(() => {
        getUserRepos(match.params.login);
        getUser(match.params.login);
    }, []);


    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company} = user; 
    if(loading) return <Spinner />;
    return (
        <React.Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable: {' '}
            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-check text-danger"/> }
            <div className='card grid-2'>
                <div className="all-center">
                    <img src={avatar_url} className='round-img' style={{width: '150px'}} alt=""/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <React.Fragment>
                        <h3>Bio</h3>
                        <p>bio</p>
                    </React.Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <React.Fragment>
                                <strong>Username: </strong> {login}
                            </React.Fragment>}
                        </li>
                        <li>
                            {company && <React.Fragment>
                                <strong>Company: </strong> {company}
                            </React.Fragment>}
                        </li>
                        <li>
                            {blog && <React.Fragment>
                                <strong>Website: </strong> {blog}
                            </React.Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-danger">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </React.Fragment>
    );
}



User.propTypes = {
    getUserRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
}



export default User;