const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/create-quiz', quizController.createQuiz);
router.post('/create-user', quizController.createUser);
router.get('/get-quiz', quizController.getQuiz);
router.get('/get-all-quizzes', quizController.getAllQuizzes);
router.get('/get-score', quizController.getScore);
router.get('/getQuestion', quizController.getQuestion);
router.get('/get-answer', quizController.getAnswer);
router.post('/save-answer', quizController.saveAnswer);
router.get('/get-leaderboard', quizController.getLeaderboard);

module.exports = router;