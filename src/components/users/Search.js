import React, { Component } from 'react'

export class Search extends Component {
    state = {text: ''};
    onSubmit = (e) => {
        e.preventDefault();
    
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Searh User..." onChange={this.onChange}/>
                    <input className="btn btn-dark btn-block" type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default Search
