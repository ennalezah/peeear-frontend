import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import { connect } from 'react-redux';

// import { fetchUsers } from './actions/userActions';
// import UsersContainer from './components/UsersContainer';

import { fetchProjects, addProject } from './actions/projectActions';
import ProjectsContainer from './components/ProjectsContainer';
import NewProjectContainer  from './components/NewProjectContainer'

import { Home } from './components/Home';
import { HowItWorks } from './components/HowItWorks';
import { NavBar } from './components/NavBar'

class App extends Component {
  componentDidMount() {
    // console.log(this.props);
    // this.props.fetchUsers();
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />

            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/projects' component={ ProjectsContainer } />
              <Route exact path='/add-new-project' component={ NewProjectContainer } />
            </Switch>            
          </div>
        </Router>

        {/* <UsersContainer usersData={ this.props.users } /> */}

        {/* <ProjectsContainer projectsData={ this.props.projects } /> */}

        {/* <NewProjectContainer projectsData={ this.props.projects } addProject={ (formData) => this.props.addProject(formData) }/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // users: state.users,
    // usersLoading: state.usersLoading,
    projects: state.projects
    // projectsLoading: state.projectsLoading
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUsers: () => dispatch(fetchUsers()),
    fetchProjects: () => dispatch(fetchProjects()),
    addProject: (formData) => dispatch(addProject(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);