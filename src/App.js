import React, { Component } from 'react';
import './App.css';
import { fetchUsers } from './actions/fetchUsers';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <p>I'm a React app.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    requesting: state.requesting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
