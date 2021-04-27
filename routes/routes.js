const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/say-something', quizController.saySomething);
router.post('/create-quiz', quizController.createQuiz);
router.get('/create-user', quizController.createUser);
router.get('/get-user', quizController.getUser);
router.get('/get-score', quizController.getScore);
router.get('/get-question', quizController.getQuestion);
router.get('/get-answer', quizController.getAnswer);
router.get('/save-answer', quizController.saveAnswer);
router.get('/get-leaderboard', quizController.getLeaderboard);

module.exports = router;