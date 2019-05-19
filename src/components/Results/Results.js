import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    const { data, search } = this.props;
    return (
      <div className="results-section">
        <p className="search-type">
          <span>
            {search.charAt(0).toUpperCase() + search.slice(1)} Results:
          </span>
        </p>
        <div className="data">{data}</div>
        <button>Save</button>
      </div>
    );
  }
}
