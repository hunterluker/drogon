import React from 'react';
import '../styles/buildWhois.css';

export const buildWhoisJSX = data => {
  const whoisData = { ...data };

  const {
    contactEmail,
    createdDate,
    updatedDate,
    expiresDate,
    domainName,
    registrant: { country, state, organization },
    nameServers: { hostNames },
    status,
    registrarName,
    registrarIANAID
  } = whoisData;

  return (
    <div className="whois-data">
      <div className="main">
        <div className="main-info">
          <label>Domain Name:</label>
          <p>{domainName}</p>
          <label>Registrar Name:</label>
          <p>{registrarName}</p>
          <label>Registrar ID:</label>
          <p>{registrarIANAID}</p>
        </div>
        <div className="location">
          <label>Location:</label>
          <p>
            {country}, {state}
          </p>
          <label>Organization:</label>
          <p>{organization}</p>
        </div>
      </div>
      <div className="host-names">
        <label>Status:</label>
        <p className="status">{status}</p>
        <label>Name Servers:</label>
        {hostNames.splice(0, 3).map(host => {
          return <p key={host}>{host}</p>;
        })}
      </div>
      <div className="dates">
        <label>Created Date: </label>
        <p>{createdDate}</p>
        <label>Updated Date: </label>
        <p>{updatedDate}</p>
        <label>Expires Date: </label>
        <p>{expiresDate}</p>
      </div>
      <div className="contact">
        <label>Contact Email:</label>
        <p>{contactEmail}</p>
      </div>
    </div>
  );
};
