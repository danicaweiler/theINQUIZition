//const mongoose = require("../mongoose");
const Quiz = require("../model/quiz");
const Question = require("../model/question");
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

    console.log(req.body.questions);
    for (var i = 0; i < req.body.questions.length; i++)
    {
        var newQuestion = req.body.questions[i];
        var question = await Question.create({
            quizID: quiz.id,
            questionNum: i,
            question: newQuestion.question,
            A: newQuestion.answerA,
            B: newQuestion.answerB,
            C: newQuestion.answerC,
            D: newQuestion.answerD,
            correctAnswer: newQuestion.correctAnswer   
        });
    }

    res.status(200).json({
        body: uuidv4()
    });
};

module.exports = {
    saySomething,
    createQuiz
};