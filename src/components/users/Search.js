import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {text: ''};
    static propTypes = {
        clearUsers: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        }
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        const {clearUsers, showClear} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Searh User..." onChange={this.onChange}/>
                    <input className="btn btn-dark btn-block" type="submit" value="Search"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search
