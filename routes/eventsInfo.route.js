const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventsInfo.controller');

router.post('/', eventController.addEvents);
router.get('/', eventController.findEvents);
router.get('/:id',eventController.findEventById);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteById);

module.exports = router;