import React, { Component } from 'react';
import './App.css';
import { fetchUsers } from './actions/fetchUsers';
import { connect } from 'react-redux';
import UsersContainer from './components/UsersContainer'

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>PEEEAR</h1>
          <h3>Find a project, work with a partner, and get coding!</h3>
        </header>

        <UsersContainer users={ this.props.users } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    requesting: state.requesting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
