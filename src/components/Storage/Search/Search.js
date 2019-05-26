import React from 'react';
import './Search.css';

export default function Search(props) {
  const { type, name } = props.search;

  function formatName() {
    if (name.length > 18) {
      return name.slice(0, 18) + '...';
    } else {
      return name;
    }
  }
  return (
    <div className="search-container">
      <p>
        {type} - {formatName()}
      </p>
      <span>
        <i class="fas fa-trash-alt" />
      </span>
    </div>
  );
}
