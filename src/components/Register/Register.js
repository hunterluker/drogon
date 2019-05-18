import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from 'react-spinkit';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/auth_reducer';
import './Register.css';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPass: '',
      error: '',
      mainError: '',
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

    const { error } = this.state;

    if (error) {
      return;
    } else {
      this.handleRegister();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.confirmPass) {
      if (prevState.confirmPass !== this.state.confirmPass) {
        this.setState({
          error: 'Passwords do not match'
        });

        if (this.state.confirmPass === this.state.password) {
          this.setState({
            error: ''
          });
        }
      }
    }
  }

  handleRegister = async () => {
    const { email, password } = this.state;

    try {
      this.setState({
        loading: true
      });
      let user = await axios.post('/auth/register', { email, password });
      this.props.updateUser(user.data);
      this.props.history.push('/welcome');
    } catch (err) {
      this.setState({
        mainError: 'Account already exist',
        loading: false
      });
      this.handleTimeout();
    }
  };

  handleTimeout = () => {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          mainError: ''
        });
      }.bind(this),
      6000
    );
  };

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { userId } = this.props;
    if (userId) {
      return <Redirect to="/" />;
    }
    const { error, mainError, loading } = this.state;
    return (
      <div>
        <div className="login-section">
          <div className="logo">
            <i className="fas fa-dragon" />
            <h1>Drogon</h1>
          </div>
          <div className="login-header">
            <h1 className="login-header-text">Register</h1>
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

            <div className="input-field">
              <label className="input-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPass"
                onChange={this.handleInput}
                className={error ? 'password-check error-text' : null}
                required
              />
              <label className="error-text">{error}</label>
            </div>

            <h2 className="main-error">{mainError}</h2>
            <button className="login-btn">
              {loading ? (
                <Spinner name="circle" className="spinner" color="#97d077" />
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          <div className="footer-btn">
            <Link to="/login">
              <button className="signup-btn">
                <i className="fas fa-times" />
              </button>
            </Link>
          </div>
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
)(Register);
