import { buildPingJSX } from './buildPingJSX';
import { buildWhoisJSX } from './buildWhoisJSX';
import { buildReverseJSX } from './buildReverseJSX';
import { buildSubdomainJSX } from './buildSubdomainJSX';
const axios = require('axios');

// module.exports = {
//   searchFilter: async (search, domain) => {
//     if (search === 'whois') {
//       let whoisData = await axios.get('/search/whois');
//       console.log(whoisData.data);
//       return whoisData.data;
//     }

//     if (search === 'ping') {
//       let pingData = await axios.get(`/search/ping/?host=${domain}`);
//       console.log(pingData.data);
//       return pingData.data;
//     }

//     if (search === 'subdomain') {
//       let subdomainData = await axios.get(`/search/subdomain`);
//       console.log(subdomainData.data);
//       return subdomainData.data;
//     }

//     if (search === 'reverseip') {
//       let reverseipData = await axios.get(`/search/reverseip`);
//       console.log(reverseipData.data);
//       return reverseipData.data;
//     }
//   }
// };

export const searchFilter = async (search, domain) => {
  if (search === 'whois') {
    let whoisData = await axios.get(`/search/whois?domain=${domain}`);
    return buildWhoisJSX(whoisData.data);
  }

  if (search === 'ping') {
    let pingData = await axios.get(`/search/ping/?host=${domain}`);
    return buildPingJSX(pingData.data);
  }

  if (search === 'subdomain') {
    let subdomainData = await axios.get(`/search/subdomain?domain=${domain}`);
    return buildSubdomainJSX(subdomainData.data);
  }

  if (search === 'reverseip') {
    let reverseipData = await axios.get(`/search/reverseip?ip=${domain}`);
    return buildReverseJSX(reverseipData.data);
  }
};
