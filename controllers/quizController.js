//const mongoose = require("../mongoose");
const Quiz = require("../model/quiz");
const Question = require("../model/question");

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
        var question = req.body.questions[i];
        var question = Question.create({
            quizID: quiz.id,
            question: question.question,
            a: question.answerA,
            b: question.answerB,
            c: question.answerC,
            d: question.answerD,
            correctAnswer: question.correctAnswer   
        });       
    }

    res.status(200).json({
        body: 'Hello from the server!'
    }); 
};

module.exports = {
    saySomething,
    createQuiz
};