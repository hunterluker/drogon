import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      active: false
    };
  }

  handleNav() {
    this.setState(prevState => ({
      hidden: false,
      active: !prevState.active
    }));
  }

  render() {
    const { active } = this.state;
    return (
      <div className="nav">
        <div className="navbar">
          <button onClick={() => this.handleNav()}>
            {active ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </button>
        </div>

        <div className="nav-links">
          <Link to="/">
            <button className={active ? 'link1-active' : 'link1 hidden'}>
              <i className="fas fa-crosshairs" />
            </button>
          </Link>

          <Link to="/storage">
            <button className={active ? 'link2-active' : 'link2 hidden'}>
              <i className="fas fa-database" />
            </button>
          </Link>

          <Link to="/settings">
            <button className={active ? 'link3-active' : 'link3'}>
              <i className="fas fa-cog" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
