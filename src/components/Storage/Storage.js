import React, { Component } from 'react';
import './Storage.css';

export default class Storage extends Component {
  render() {
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
      </div>
    );
  }
}
