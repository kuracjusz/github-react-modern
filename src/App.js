import React from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';



class App extends React.Component {
  state = {
    repos: [],
    users: [],
    loading: false,
    alert: {},
    user: {}
  };

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

  getUser = async (userName) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading: false})
  }

  getUserRepos = async (userName) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&c&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos: res.data, loading: false})
  }

  render() {
    const {user, repos, users, loading, alert} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <Search clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
                  <Users loading={loading} users={users}/>
                </React.Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user:login' render={props => (
                <User {...props} loading={loading} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
