import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/auth_reducer';
import { searchFilter } from '../../utils/searchFilter';
import Results from '../Results/Results';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'whois',
      domain: '',
      data: ''
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  };

  handleSearch = async () => {
    let data = await this.handleSearchFilter();
    this.setState({
      data: data,
      domain: ''
    });
  };

  async handleSearchFilter() {
    const { search, domain } = this.state;
    let data = await searchFilter(search, domain);
    return data;
  }

  handleDomain = e => {
    this.setState({
      domain: e.target.value
    });
  };

  handleSearchInput = e => {
    this.setState({
      search: e.target.name
    });
  };

  render() {
    const { search, data } = this.state;
    return (
      <div className="dashboard-section">
        <div className="dashboard-search">
          <div className="search-nav">
            <div className="brand">
              <i className="fas fa-dragon dragon-icon" />
              <h1>Drogon</h1>
            </div>

            <input
              type="text"
              placeholder="Enter a domain here..."
              onChange={this.handleDomain}
              value={this.state.domain}
            />
            <i
              className="fas fa-search search-icon"
              onClick={this.handleSearch}
            />
          </div>

          <div className="search-options">
            <button
              className={
                search === 'whois' ? 'active-search search-btn' : 'search-btn'
              }
              name="whois"
              onClick={this.handleSearchInput}
            >
              WHOIS
            </button>
            <button
              className={
                search === 'ping' ? 'active-search search-btn' : 'search-btn'
              }
              name="ping"
              onClick={this.handleSearchInput}
            >
              PING
            </button>
            <button
              className={
                search === 'reverseip'
                  ? 'active-search search-btn'
                  : 'search-btn'
              }
              name="reverseip"
              onClick={this.handleSearchInput}
            >
              REVERSE-IP
            </button>
            <button
              className={
                search === 'subdomain'
                  ? 'active-search search-btn'
                  : 'search-btn'
              }
              name="subdomain"
              onClick={this.handleSearchInput}
            >
              SUBDOMAIN
            </button>
          </div>
        </div>
        {data ? (
          <Results data={data} search={search} />
        ) : (
          <div className="results-empty">
            <i className="fas fa-sort-up" />
            <p>Search for a domain above.</p>
          </div>
        )}
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
)(Dashboard);
