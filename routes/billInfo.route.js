const express = require('express');
const router = express.Router();
const billController = require('../controller/billInfo.controller');

router.post('/', billController.addBills);
router.get('/', billController.findBills);
router.get('/:billId',billController.findBillById);
router.put('/:billId', billController.updateBill);
router.delete('/:billId', billController.deleteById);

module.exports = router;