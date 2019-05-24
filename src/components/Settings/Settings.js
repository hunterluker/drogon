import React, { Component } from 'react';
import './Settings.css';

export default class Settings extends Component {
  render() {
    return (
      <div className="settings-section">
        <header className="storage-header">
          <div className="storage-brand">
            <i className="fas fa-dragon" />
            <h1>Drogon</h1>
          </div>
          <div className="storage-title">
            <h2>Settings</h2>
          </div>
        </header>

        <div className="settings-main">
          <div className="settings-container">
            <label>Change Theme</label>
            <input type="range" min="0" max="1" />
          </div>
        </div>
      </div>
    );
  }
}
