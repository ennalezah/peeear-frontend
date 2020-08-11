import React, { Component } from 'react';
import './App.css';
import { fetchUsers } from './actions/userActions';
import { fetchProjects } from './actions/projectActions';

import { connect } from 'react-redux';
import UsersContainer from './components/UsersContainer'
import ProjectsContainer from './components/ProjectsContainer'

class App extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchUsers();
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>PEEEAR</h1>
          <h3>Find a project, work with a partner, and get coding!</h3>          
        </header>

        <UsersContainer usersData={ this.props.users } />

        <hr />

        <ProjectsContainer projectsData={ this.props.projects } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    projects: state.projects
    // loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
