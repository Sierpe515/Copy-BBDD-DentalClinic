const router = require('express').Router();
const treatmentController = require('../controllers/treatmentController')

router.get('/getTreatments', treatmentController.findAllTreatments);

module.exports = router;