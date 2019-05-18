const express = require('express');
const router = express.Router();

// Controllers
const authCtrl = require('../controllers/authController');

// Auth Routes
router.post('/login', authCtrl.login);

router.post('/register', authCtrl.register);

router.get('/current', authCtrl.current);

router.post('/logout', authCtrl.logout);

module.exports = router;
