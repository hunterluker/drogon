import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search/Search';
import './Storage.css';

class Storage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="storage-section">
        <header className="storage-header">
          <div className="storage-brand">
            <i className="fas fa-dragon" />
            <h1>Drogon</h1>
          </div>
          <div className="storage-title">
            <h2>Storage</h2>
          </div>
        </header>

        <div className="storage-spacer" />

        <div className="storage-data-container">
          {data.map((el, i) => {
            return <Search key={el.id} id={el} search={el} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchReducer }) {
  return {
    data: searchReducer.data
  };
}

export default connect(mapStateToProps)(Storage);
