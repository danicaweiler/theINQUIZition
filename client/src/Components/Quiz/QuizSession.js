import React, { useState, useEffect } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import axios from "axios";

var qs = require('qs');

function QuizSession(props) {
  const [quizId, setQuizId] = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).id); //props.location.search;
  const [question, setQuestion] = useState({
    body: {
      question: "Loading...", a: ["Answer A", false], b: ["Answer B", true], c: ["Answer C", false], d: ["Answer D", false]
    }
  });

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    try {
      const res = axios.get('/api/v1/getQuestion', {
        params: {
          "quizID": quizId,
          "Number": currentQuestionNumber
        }
      }).then((res) => {
        setQuestion(res.data)
        console.log(res.data);
      });;
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, [])

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionNumber + 1;
    const res = axios.get('/api/v1/getQuestion', {
      params: {
        "quizID": quizId,
        "Number": nextQuestion
      }
    }).then((res) => {
      setQuestion(res.data)
      if (question != null) {
        setCurrentQuestionNumber(nextQuestion);
      }
    })
      .catch((error) => {
        setIsEnd(true);
      })
      .finally(() => {
        if (isEnd == true) {
          handleEnd();
        }
      });

  };

  const handleEnd = () => {
    <Redirect to={
      "quiz?id=" + quizId 
        } />
  };


  return (
    <div id='quiz'>
      <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className='game-body alternate' >
        <div className='form-body'>
          <div className='score-section'>
            Your score is {score}
          </div>
          <div className='question-section answer-section'>
            <div className="question-input main question">
              <span>Question {currentQuestionNumber}</span>
            </div>
            <label>
              <p className="question-input main question">{question.body.question}</p>
            </label>
          </div>
          <div className='answer-section'>
            <button className="answer main-button"
              onClick={() => handleAnswerOptionClick(question.body.a[1])}>
              {question.body.a[0]}
            </button>
            <button className="answer main-button"
              onClick={() => handleAnswerOptionClick(question.body.b[1])}>
              {question.body.b[0]}
            </button>
            <br />
            <button className="answer main-button"
              onClick={() => handleAnswerOptionClick(question.body.c[1])}>
              {question.body.c[0]}
            </button>
            <button className="answer main-button"
              onClick={() => handleAnswerOptionClick(question.body.d[1])}>
              {question.body.d[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(QuizSession);
