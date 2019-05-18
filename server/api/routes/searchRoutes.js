const router = require('express').Router();

// Search Controller
const searchCtrl = require('../controllers/searchController');

router.get('/whois', searchCtrl.whois);

router.get('/subdomain', searchCtrl.subdomain);

router.get('/reverseip', searchCtrl.reverseip);

router.get('/ping/', searchCtrl.ping);

module.exports = router;
