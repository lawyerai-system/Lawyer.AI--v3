const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');
const builderController = require('../controllers/builderController');

// All routes are protected and allowed for civilian, law_student, lawyer (and admin)
router.use(protect);
router.use(restrictTo('civilian', 'law_student', 'lawyer', 'admin'));

router.post('/build-case', builderController.buildCase);

module.exports = router;
