import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import {userActions} from './actions';

class App extends Component {

  componentDidMount(){
    this.props.getUser(1)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.userReducers;
  return {
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: (id) => dispatch(userActions.get(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);