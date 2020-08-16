import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { fetchUsers } from './actions/userActions';
import UsersContainer from './components/UsersContainer'

import { fetchProjects, addProject } from './actions/projectActions';
import ProjectsContainer from './components/project/ProjectsContainer'





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

        <ProjectsContainer projectsData={ this.props.projects } addProject={ (formData) => this.props.addProject(formData) }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    usersLoading: state.usersLoading,
    projects: state.projects,
    projectsLoading: state.projectsLoading
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProjects: () => dispatch(fetchProjects()),
    addProject: (formData) => dispatch(addProject(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
