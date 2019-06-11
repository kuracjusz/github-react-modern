import React from 'react';
import PropTypes from 'prop-types';

export class Navbar extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        );
    }
}