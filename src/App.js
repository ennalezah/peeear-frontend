import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import { connect } from 'react-redux';

import { fetchProjects, addProject } from './actions/projectActions';
import ProjectsContainer from './components/containers/Projects';
import NewProjectContainer  from './components/containers/NewProject'

import { Home } from './components/Home';
import { NavBar } from './components/NavBar'

class App extends Component {
  componentDidMount() {
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

              <Route exact path='/projects' render={(props) => <ProjectsContainer projects={ this.props.projects }/>} />

              <Route exact path='/new-project' render={ (props) => <NewProjectContainer addProject={ (formData) => this.props.addProject(formData) }/> } />
            </Switch>            
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    addProject: (formData) => dispatch(addProject(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);