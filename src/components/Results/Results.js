import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePingResults, saveWhoisResults } from '../../ducks/search_reducer';
import './Results.css';

class Results extends Component {
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

  handleSaveData = () => {
    const { data, domain, search } = this.props;
    // console.log(data);
    if (search === 'whois') {
      this.props.saveWhoisResults(domain, data);
    }

    if (search === 'ping') {
      this.props.savePingResults(domain, data);
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
        <button onClick={this.handleSaveData}>Save Results</button>
      </div>
    );
  }
}

export default connect(
  null,
  { savePingResults, saveWhoisResults }
)(Results);
