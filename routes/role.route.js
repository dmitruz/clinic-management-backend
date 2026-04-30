const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleInfo.controller');

router.post('/', roleController.addRoles);
router.get('/', roleController.findRoles);
router.get('/:id',roleController.findRoleById);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteById);

module.exports = router;