import React from 'react';
import '../styles/buildSubdomain.css';

export const buildSubdomainJSX = data => {
  let subdomains = data.map((subdomain, i) => {
    return (
      <div className="subdomain-data" key={i}>
        <p>
          {i + 1}. {subdomain}
        </p>
      </div>
    );
  });

  return subdomains;
};
