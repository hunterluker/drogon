import React from 'react';

export const buildPingJSX = data => {
  let pingData = data.split('\n');

  let mappedPing = pingData.map((ping, i) => {
    return (
      <div className="ping-data" style={{ marginBottom: '3px' }} key={i}>
        <p
          style={{
            fontSize: '11px',
            lineHeight: 1.5,
            fontFamily: 'monospace'
          }}
        >
          {ping}
        </p>
      </div>
    );
  });

  return mappedPing;
};
