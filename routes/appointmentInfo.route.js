const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentInfo.controller');
const patientController=require('../controller/patientInfo.controller');



router.post('/', appointmentController.addAppointments);
router.get('/', appointmentController.findAppointments);
router.get('/:id',appointmentController.findAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteById);
router.get('/patients/:patientId',patientController.findPatientById);
router.get('/bydate/:appointmentDate',appointmentController.findAppointmentByDate);

module.exports = router;
