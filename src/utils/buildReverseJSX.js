import React from 'react';
import '../styles/buildReverse.css';

export const buildReverseJSX = data => {
  let reverseIpData = data.slice();

  let mappedPing = reverseIpData.map((ip, i) => {
    return (
      <div className="reverseip-data" key={i}>
        <p>
          {i + 1}.{' '}
          <a
            href={'https://' + ip.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ip.name}
          </a>
        </p>
      </div>
    );
  });

  return mappedPing;
};
