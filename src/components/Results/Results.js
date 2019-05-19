import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="results-section">
        <div className="data">{data}</div>
        <button>Save</button>
      </div>
    );
  }
}
