const express = require('express');
const router = express.Router();

const medicineController=require('../controller/medicineInfo.controller');

router.post('/', medicineController.addMedicine);
router.get('/', medicineController.findMedicine);
router.get('/:medicineid', medicineController.findMedicineById);
router.put('/:medicineid', medicineController.updateMedicine);
router.delete('/:medicineid', medicineController.deleteById);
router.get('/bydate/:dateMedicine',medicineController.findMedicineByDate);

module.exports = router;