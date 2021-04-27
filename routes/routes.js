const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/say-something', quizController.saySomething);
router.post('/create-quiz', quizController.createQuiz);
router.get('/create-user', quizController.createUser);
router.get('/get-user', quizController.getUser);
router.get('/get-question', quizController.getQuestion);
router.get('/get-answer', quizController.getAnswer);

module.exports = router;