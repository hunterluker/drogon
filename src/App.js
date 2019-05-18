import React, { Component } from 'react';
import Routes from './routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    const welcome = this.props.location.pathname === '/welcome';
    return (
      <div className="App">
        <Routes />
        {this.props.userId && !welcome ? (
          <div className="dash-nav">
            {' '}
            <Navbar />{' '}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.authReducer.userId
  };
}

export default withRouter(connect(mapStateToProps)(App));
