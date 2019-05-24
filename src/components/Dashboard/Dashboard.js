import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
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
      savedDomain: '',
      data: '',
      loading: false,
      error: ''
    };

    this.searchInput = React.createRef();
  }

  componentDidMount() {
    this.searchInput.current.focus();
    document.addEventListener('keydown', this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown);
    clearTimeout(this.timeOut);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        data: '',
        loading: false
      });
    }
  }

  _handleKeyDown = event => {
    const { domain } = this.state;
    if (event.keyCode === 13 && domain) {
      this.handleSearch();
    }
  };

  handleSearch = async () => {
    this.searchInput.current.blur();
    const { domain } = this.state;
    if (domain) {
      this.setState({
        loading: true
      });
      try {
        let data = await this.handleSearchFilter();
        this.setState({
          data: data,
          domain: '',
          loading: false
        });
      } catch (err) {
        console.log(err);
        this.hanldeError();
      }
    }
  };

  hanldeError = () => {
    this.setState({
      error: 'Domain not found in database.',
      domain: '',
      loading: false,
      data: ''
    });
    this.timeOut = setTimeout(
      function() {
        this.setState({
          error: ''
        });
      }.bind(this),
      4000
    );
  };

  async handleSearchFilter() {
    const { search, domain } = this.state;
    let data = await searchFilter(search, domain);
    return data;
  }

  handleDomain = e => {
    this.setState({
      domain: e.target.value,
      savedDomain: e.target.value
    });
  };

  handleSearchInput = e => {
    this.searchInput.current.focus();
    this.setState({
      search: e.target.name
    });
  };

  render() {
    const { search, data, loading, error, savedDomain } = this.state;
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
              placeholder={
                search === 'reverseip'
                  ? 'Enter an IP address...'
                  : 'Enter a domain here...'
              }
              maxLength={search === 'reverseip' ? 15 : 55}
              onChange={this.handleDomain}
              value={this.state.domain}
              ref={this.searchInput}
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

        <div className="spacer" />

        {loading ? (
          <div className="dash-load">
            <Spinner name="circle" className="spinner" color="#97d077" />
          </div>
        ) : error ? (
          <p className="error">{error}</p>
        ) : data ? (
          <Results data={data} search={search} domain={savedDomain} />
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
