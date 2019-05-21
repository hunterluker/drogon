import React from 'react';
import '../styles/buildPing.css';

export const buildPingJSX = data => {
  let pingData = data.split('\n');

  let mappedPing = pingData.map((ping, i) => {
    return (
      <div className="ping-data" key={i}>
        <p>{ping}</p>
      </div>
    );
  });

  return mappedPing;
};
