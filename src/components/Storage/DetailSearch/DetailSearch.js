import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findSearch } from '../../../ducks/search_reducer';
import './DetailSearch.css';

class DetailSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.findSearch(id);
  }

  render() {
    console.log(this.props.currentSearch);
    return (
      <div>
        <header className="detail-header">
          <div className="detail-brand">
            <i className="fas fa-dragon" />
            <h1>Drogon</h1>
          </div>
          <div className="detail-title">
            <h2>{this.props.currentSearch.name}</h2>
          </div>
        </header>

        <div className="detail-container">
          <p className="detail-type">
            <span>{this.props.currentSearch.type} Results:</span>
          </p>
          <div className="detail-search-data">
            {this.props.currentSearch.searchData}
          </div>

          <button onClick={() => this.props.history.goBack()}>Back</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchReducer }) {
  return {
    currentSearch: searchReducer.currentSearch
  };
}

export default connect(
  mapStateToProps,
  { findSearch }
)(DetailSearch);
