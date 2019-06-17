import React, { useState } from 'react'
import PropTypes from 'prop-types'




const Search = ({setAlert, clearUsers, searchUsers, showClear}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    }
    const onChange = e => setText(e.target.value);
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input value={text} type="text" name="text" placeholder="Searh User..." onChange={onChange}/>
                <input className="btn btn-dark btn-block" type="submit" value="Search"/>
            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    )
}
Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
export default Search;