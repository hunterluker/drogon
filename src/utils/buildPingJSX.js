import React from 'react';

export const buildPingJSX = data => {
  let pingData = data.split('\n');

  let mappedPing = pingData.map((ping, i) => {
    return (
      <div className="ping-data" key={i}>
        <p style={{ fontSize: '10px', lineHeight: 1.5 }}>{ping}</p>
      </div>
    );
  });

  return mappedPing;
};
