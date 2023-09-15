const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

// prettier-ignore
router.post('/login',
  express.json(),
  userCtrl.login
);

module.exports = router;
