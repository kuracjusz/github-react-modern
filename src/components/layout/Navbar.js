import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};