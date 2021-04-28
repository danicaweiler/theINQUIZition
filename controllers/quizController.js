const Quiz = require("../model/quiz");
const Question = require("../model/question");
const User = require("../model/user");

const createQuiz = async (req, res, next) => {
    const quiz = await Quiz.create({
        title: req.body.title,
        category: "General Trivia"
    });

    for (var i = 0; i < req.body.questions.length; i++)
    {
        await Question.create({
            quizID: quiz.id,
            questionNum: i + 1,
            question: req.body.questions[i].question,
            A: req.body.questions[i].answerA,
            B: req.body.questions[i].answerB,
            C: req.body.questions[i].answerC,
            D: req.body.questions[i].answerD,
            correctAnswer: req.body.questions[i].correctAnswer
        });
    }

    res.status(200).json({
        sessionID: quiz.id
    });
};

const createUser = async(req, res) => {
    var newUser = await User.create({
        "quizID": req.body.quizID,
        "displayName" : req.body.username,
        "score": 0
    });
    res.status(201).json({
        body: {
            "userID": newUser.id,
        }
    });
}

const getQuiz = async(req, res) => {
    await Quiz.findById(req.query.quizID, function (err, quiz) {
        res.status(200).json({
            body: {
                "title": quiz.title
            }
        });
    });
};

const getAllQuizzes = async(req, res) => {
    await Quiz.find({}, { title: 1}, function (err, quizzes) {
        res.status(200).json({
            body: {
                quizzes
            }
        });
    });
};


const getScore = async(req, res) => {
    await User.findById(req.query.userID, function (err, user) {
        res.status(200).json({
            body: {
                "score": user.score
            }
        });
    });
};

const getQuestion = async(req, res) => {

    await Question.findOne({ quizID: req.query.quizID, questionNum: req.query.Number }, function (err, question) {

        if (question == null)
        {
            res.status(200).json({
                success: true,
                body: "end"
            });
        }
        else {
        res.status(200).json({
            body: {
                "question": question.question,
                "a": [
                    question.A,
                    (question.A === question.correctAnswer ? true : false)
                ],
                "b": [
                    question.B,
                    (question.B === question.correctAnswer ? true : false)
                ],
                "c":
                    [
                    question.C,
                    (question.C === question.correctAnswer ? true : false)
                ],
                "d": [
                    question.D,
                    (question.D === question.correctAnswer ? true : false)
                ]
            }
        
        });
    }
    });
};

const getAnswer = async(req, res) => {
    await Question.findOne({ quizID: req.query.quizID, questionNum: req.query.Number }, function (err, question) {
        res.status(200).json({
            body: {
                "question": question.question,
                "answer": question.correctAnswer
            }
        });
    });
};

const saveAnswer = async(req, res) => {
    await User.findById(req.body.userID, async function (err, user) {
        await Question.findOne({ quizID: req.body.quizID, questionNum: req.body.Number }, async function (err, question) {
            if (question.correctAnswer == req.body.answer)
            {
                user.score = user.score + req.body.score;
                await user.save();
            };
            res.status(200).json({
                body: {
                    "score": user.score
                }
            });
        });
    });
};

const getLeaderboard = async(req, res) => {
    await User.find({ quizID: req.query.quizID }, async function (err, users) {
        var body = {};
        body.users = [];
        users.forEach(function(user) {
            body.users.push({ username: user.displayName, score: user.score });
        })
        res.status(200).json({
            body
        });
    });
};

module.exports = {
    createQuiz,
    createUser,
    getQuiz,
    getAllQuizzes,
    getScore,
    getQuestion,
    getAnswer,
    saveAnswer,
    getLeaderboard
};