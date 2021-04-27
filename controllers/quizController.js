const Quiz = require("../model/quiz");
const Question = require("../model/question");
const User = require("../model/user");

const { v4: uuidv4 } = require("uuid");

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

const createQuiz = async (req, res, next) => {
    const quiz = await Quiz.create({
        title: req.body.title,
        category: "General Trivia"
    });

    for (var i = 0; i < req.body.questions.length; i++)
    {
        var newQuestion = req.body.questions[i];
        var question = await Question.create({
            quizID: quiz.id,
            questionNum: i,
            question: newQuestion.question,
            A: [
                {
                    answerText: newQuestion.answerA,
                    isCorrect: (answerText == newQuestion.corerctAnswer ? true : false)
                }
            ],
            B: [
                {
                    answerText: newQuestion.answerA,
                    isCorrect: (answerText == newQuestion.corerctAnswer ? true : false)
                }
            ],
            C: [
                {
                    answerText: newQuestion.answerA,
                    isCorrect: (answerText == newQuestion.corerctAnswer ? true : false)
                }
            ],
            D: [
                {
                    answerText: newQuestion.answerA,
                    isCorrect: (answerText == newQuestion.corerctAnswer ? true : false)
            ] 
        });
    }

    res.status(200).json({
        sessionID: quiz.id
    });
};

const createUser = async(req, res) => {
    var newUser = await User.create({
        "quizID": req.quizID,
        "displayName" : req.username,
        "score": 0
    });
    res.status(201).json({
        body: {
            "userID": newUser.id,
        }
    });
}

const getUser = async(req, res) => {
    // What is purpose of this route?
}

const getScore = async(req, res) => {
    await User.findOne({ _id : req.body.userID }, async function (err, user) {
        res.status(200).json({
            body: {
                "score": user.score
            }
        });
    });
}

const getQuestion = async(req, res) => {
    await Question.findOne({ quizID: req.body.quizID, questionNum: req.body.Number }, function (err, question) {
        res.status(200).json({
            body: {
                "question": question.question,
                "answers": [
                    question.A,
                    question.B,
                    question.C,
                    question.D
                ]
            }
        });
    });
};

const getAnswer = async(req, res) => {
    await Question.findOne({ quizID: req.body.quizID, questionNum: req.body.Number }, function (err, question) {
        res.status(200).json({
            body: {
                "question": question.question,
                "answer": question.correctAnswer
            }
        });
    });
};

const saveAnswer = async(req, res) => {
    await Question.findOne({ quizID: req.body.quizID, questionNum: req.body.Number }, async function (err, question) {
        if (question.correctAnswer == req.body.answer)
        {
            user.score = user.score + req.body.score;
            await user.save();
        }
        res.status(200).json({
            body: {
                "score": user.score
            }
        });
    });
};

const getLeaderboard = async(req, res) => {
    await User.find({ quizID: req.body.quizID }, async function (err, users) {
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
    saySomething,
    createQuiz,
    createUser,
    getUser,
    getScore,
    getQuestion,
    getAnswer,
    saveAnswer,
    getLeaderboard
};