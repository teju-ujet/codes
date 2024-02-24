const express = require('express');
const router = express.Router();
const apiController = require('../controllers/third_party_api.controller');

router.get('/thirdapi', apiController.getAPIEntries);
router.post('/thirdapi', apiController.createAPIEntry);
router.put('/thirdapi/:id', apiController.updateAPIEntry);
router.delete('/thirdapi/:id', apiController.deleteAPIEntry);

module.exports = router;
