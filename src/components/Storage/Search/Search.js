import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

export default function Search(props) {
  const { type, name, id } = props.search;

  function formatName() {
    if (name.length > 18) {
      return name.slice(0, 18) + '...';
    } else {
      return name;
    }
  }
  return (
    <Link to={`/detail/${id}`}>
      <div className="search-container">
        <p>
          {type} - {formatName()}
        </p>
        <span>
          <i className="fas fa-trash-alt" />
        </span>
      </div>
    </Link>
  );
}
