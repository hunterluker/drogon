const axios = require('axios');
const { WHOIS_XML_API_KEY, SECURITY_TRAILS_API_KEY } = process.env;

module.exports = {
  whois: async (req, res) => {
    const { domain } = req.query;
    let resp = await axios.get(
      `https://www.whoisxmlapi.com/whoisserver/WhoisService?domainName=${domain}&apiKey=${WHOIS_XML_API_KEY}&outputFormat=JSON`
    );
    res.status(200).send(resp.data.WhoisRecord);
  },
  subdomain: async (req, res) => {
    const { domain } = req.query;
    let resp = await axios.get(
      `https://api.securitytrails.com/v1/domain/${domain}/subdomains?apikey=${SECURITY_TRAILS_API_KEY}`
    );
    res.status(200).send(resp.data.subdomains);
  },
  reverseip: async (req, res) => {
    const { ip } = req.query;
    let resp = await axios.get(
      `https://reverse-ip-api.whoisxmlapi.com/api/v1?&apiKey=${WHOIS_XML_API_KEY}&ip=${ip}&outputFormat=JSON`
    );
    res.status(200).send(resp.data.result);
  },
  ping: async (req, res) => {
    const { host } = req.query;
    try {
      let resp = await axios.get(
        `https://steakovercooked.com/api/ping/?host=${host}`
      );
      res.status(200).send(resp.data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
