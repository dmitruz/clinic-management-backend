const express = require('express');
const router = express.Router();

const staffInfoController = require('../controller/staffInfo.controller');

router.post('/', staffInfoController.add);
router.get('/', staffInfoController.find);
router.get('/:staffId', staffInfoController.findById);
router.put('/:staffId', staffInfoController.update);
router.delete('/:staffId', staffInfoController.deleteById);

module.exports = router;