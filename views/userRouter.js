const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');
const verifyToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/getApp', verifyToken, userController.getAppointment);
router.get('/getAppAdm', verifyToken, isAdmin, userController.getAppointmentAdmin);
router.get('/getAppDoc', verifyToken, isDoctor, userController.getAppointmentDoctor);
router.get('/profile', verifyToken, userController.profile);
router.put('/updateProfile', verifyToken, userController.updateUser);
router.put('/updateProfile/:id', verifyToken, isAdmin, userController.updateUserByAdmin);
router.get('/getProfilesDoc', verifyToken, isDoctor, userController.findAllUsersDoctor);
router.get('/getProfilesAdm', verifyToken, isAdmin, userController.findAllUsersAdmin);
router.delete('/deleteUser/:id', verifyToken, isAdmin, userController.deleteUserByAdmin);
router.get('/getDoctors', userController.findAllDoctors);
router.get('/getUpcomingAppAdm', verifyToken, isAdmin, userController.getUpcomingAppointmentAdmin);
router.get('/getPastAppAdm', verifyToken, isAdmin, userController.getPastAppointmentAdmin);
router.get('/getUpcomingAppUser', verifyToken, userController.getUpcomingAppointmentUser);
router.get('/getPastAppUser', verifyToken, userController.getPastAppointmentUser);
router.get('/getUpcomingAppDoctor', verifyToken, userController.getUpcomingAppointmentDoctor);
router.get('/getPastAppDoctor', verifyToken, userController.getPastAppointmentDoctor);
router.get('/searchAllUsersAdmin/:name', verifyToken, isAdmin, userController.searchAllUsersAdmin);


module.exports = router;