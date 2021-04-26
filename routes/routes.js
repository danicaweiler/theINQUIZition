const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/say-something', quizController.saySomething);
router.post('/create-quiz', quizController.createQuiz);

module.exports = router;