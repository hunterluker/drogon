import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/auth_reducer';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.handleLogin();
  };

  handleLogin = async () => {
    const { email, password } = this.state;

    try {
      this.setState({
        loading: true
      });
      let user = await axios.post('/auth/login', { email, password });
      this.props.updateUser(user.data);
    } catch (err) {
      this.setState({
        error: 'Auth Failure - Check email and password',
        loading: false
      });
      this.handleTimeout();
    }
  };

  handleTimeout = () => {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          error: ''
        });
      }.bind(this),
      6000
    );
  };

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { error, loading } = this.state;
    return (
      <div className="login-section">
        <div className="logo">
          <i className="fas fa-dragon" />
          <h1>Drogon</h1>
        </div>
        <div className="login-header">
          <h1 className="login-header-text">Login</h1>
        </div>

        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label className="input-label">Email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleInput}
              required
            />
          </div>

          <div className="input-field">
            <label className="input-label">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleInput}
              required
            />
          </div>

          <h2 className="login-error">{error}</h2>

          <button className="login-btn">
            {loading ? (
              <Spinner name="circle" className="spinner" color="#97d077" />
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="footer-btn">
          <Link to="/register">
            <button className="signup-btn">
              <i className="fas fa-plus" />
            </button>
          </Link>
        </div>
      </div>
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
)(Login);
