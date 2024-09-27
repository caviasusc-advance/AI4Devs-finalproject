const express = require('express');
const router = express.Router();
const SystemConfigurationController = require('../controllers/systemConfigurationController');

router.get('/system/:type', SystemConfigurationController.getByType);

module.exports = router;