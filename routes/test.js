const express= require('express');
const router = express.Router();
const testCtrl = require('../controllers/test');

router.get('/', 
  testCtrl.getHello);

module.exports = router;
