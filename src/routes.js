import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Welcome from './components/Welcome/Welcome';
import Settings from './components/Settings/Settings';
import Storage from './components/Storage/Storage';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './ducks/auth_reducer';

class Routes extends Component {
  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const { user_id } = this.props;
    if (!user_id) {
      try {
        let user = await axios.get('/auth/current');
        this.props.updateUser(user.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  render() {
    const { userId } = this.props;
    return (
      <Switch>
        <Route
          path="/storage"
          render={() => (userId ? <Storage /> : <Redirect to="/" />)}
        />
        <Route
          path="/settings"
          render={() => (userId ? <Settings /> : <Redirect to="/" />)}
        />
        <Route path="/welcome" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route
          path="/login"
          render={() => (userId ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          exact
          path="/"
          render={() =>
            userId === 0 ? <Redirect to="/login" /> : <Dashboard />
          }
        />
      </Switch>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.authReducer.userId
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Routes);
