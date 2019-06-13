import React from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';

class App extends React.Component {
  state = {
     users: [],
     loading: false,
     alert: {}
  };

  // async componentDidMount() {
  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //   this.setState({users: res.data, loading: false});
  // }

  clearUsers = () => this.setState({users: [], loading: false});

  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false})
  }

  setAlert = (msg, type) => {
    this.setState({loading: false, alert: {msg, type}})
    setTimeout(() => this.setState({alert: null}), 5000);
  };

  render() {
    const {users, loading, alert} = this.state;
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
         <Alert alert={alert}/>

          <Search clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }

}

export default App;
