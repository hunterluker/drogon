import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import { connect } from 'react-redux';
import { removeSearch } from '../../../ducks/search_reducer';

function Search(props) {
  const { type, name, id } = props.search;

  function formatName() {
    if (name.length > 18) {
      return name.slice(0, 18) + '...';
    } else {
      return name;
    }
  }
  return (
    <div className="search-container">
      <Link to={`/detail/${id}`}>
        <div className="search-link">
          <p>
            {type} - {formatName()}
          </p>
        </div>
      </Link>
      <span>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.removeSearch(id)}
        />
      </span>
    </div>
  );
}

export default connect(
  null,
  { removeSearch }
)(Search);
