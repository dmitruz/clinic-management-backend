const express = require('express');
const router = express.Router();
const testsInfoController = require('../controller/testsInfo.controller');

router.post('/', testsInfoController.addRoles);
router.get('/', testsInfoController.findRoles);
router.get('/:id',testsInfoController.findRoleById);
router.put('/:id', testsInfoController.updateRole);
router.delete('/:id', testsInfoController.deleteById);

module.exports = router;