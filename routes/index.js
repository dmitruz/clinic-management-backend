const express = require('express');
const router = express.Router();

const roleRoutes = require('./role.route');
const userRoutes = require('./user.route');
const staffRoutes = require('./staffInfo.route');
const doctorRoutes = require('./doctorInfo.route')
const testsRoutes = require('./testsInfo.route');
const labreportRoutes = require('./labreportInfo.route');
const billRoutes = require('./billInfo.route');
const patientRoutes = require('./patientInfo.route');
const medicineRoutes = require('./medicine.route');
const appointmentRoutes = require('./appointmentInfo.route');
const eventsRoutes = require('./eventsInfo.route');

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/staffs', staffRoutes);
router.use('/doctors', doctorRoutes)
router.use('/tests', testsRoutes);
router.use('/reports', labreportRoutes);
router.use('/bills', billRoutes);
router.use('/patients', patientRoutes);
router.use('/medicines', medicineRoutes);
router.use('/appointments',appointmentRoutes);
router.use('/events', eventsRoutes);


router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/staffs', staffRoutes);
router.use('/doctors', doctorRoutes)
router.use('/tests', testsRoutes);
router.use('/reports', labreportRoutes);
router.use('/bills', billRoutes);
router.use('/patients', patientRoutes);
router.use('/medicines', medicineRoutes);
router.use('/appointments',appointmentRoutes);
router.use('/events', eventsRoutes)


module.exports = router;