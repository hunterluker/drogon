import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  handleSearchFormat = () => {
    const { search } = this.props;
    if (search === 'reverseip') {
      return (
        search.charAt(0).toUpperCase() +
        search.slice(1, 7) +
        '-' +
        search.charAt(7).toUpperCase() +
        search.charAt(8).toUpperCase()
      );
    } else {
      return search.charAt(0).toUpperCase() + search.slice(1);
    }
  };
  render() {
    const { data } = this.props;

    return (
      <div className="results-section">
        <p className="search-type">
          <span>{this.handleSearchFormat()} Results:</span>
        </p>
        <div className="data">{data}</div>
        <button>Save Results</button>
      </div>
    );
  }
}
