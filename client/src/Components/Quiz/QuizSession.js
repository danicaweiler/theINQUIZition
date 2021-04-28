import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
var qs = require('qs');

function QuizSession(props) {
  //set the amount of confetti
  const numConfetti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const confettiArray = numConfetti.map((nums) => (
    <div className='confetti' key={nums} />
  ));

  const quizId = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).id);
  const [question, setQuestion] = useState({
    body: {
      question: "Loading...", a: ["", false], b: ["", true], c: ["", false], d: ["", false]
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
        setQuestion(res.data);
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, [])

  const handleAnswerOptionClick = (answer) => {

    const data = {
      userID: localStorage.getItem("UserID"),
      quizID: quizId,
      Number: currentQuestionNumber,
      answer: answer,
      score: 10
    };

    (async () => {
      await axios.post('/api/v1/save-answer', data
      ).then((res) => {
        setScore(res.data.body.score)
      });
    })()

    const nextQuestion = currentQuestionNumber + 1;
    const res = axios.get('/api/v1/getQuestion', {
      params: {
        "quizID": quizId,
        "Number": nextQuestion
      }
    }).then((res) => {
      
      console.log(res.data.body);
      if (res.data.body !== "end") {
        setQuestion(res.data)
        if (question != null) {
          setCurrentQuestionNumber(nextQuestion);
        }
      } else {
        setIsEnd(true);
      }
    })
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
          {isEnd ? (
            <div className='answer-section'>
              <p>Congrats! You scored {score} points</p>
              <div className='confetti-container'>{confettiArray}</div>
              <Link to={`quiz?id=${quizId[0]}`}>
                <button type='button' className="main-button alternate" id="Back">Go To Leaderboard</button>
              </Link>
            </div>
          ) : (
            <>
              <div className='question-section answer-section'>
                <div className="question-input main question">
                  <span>Question {currentQuestionNumber}</span>
                </div>
                <label>
                  <p className="question-input main question large">{question.body.question}</p>
                </label>
              </div>
              <div className='answer-section'>
                <button className="answer main-button"
                  onClick={() => handleAnswerOptionClick("A")}>
                  {question.body.a[0]}
                </button>
                <button className="answer main-button alternate"
                  onClick={() => handleAnswerOptionClick("B")}>
                  {question.body.b[0]}
                </button>
                <br />
                <button className="answer main-button alternate"
                  onClick={() => handleAnswerOptionClick("C")}>
                  {question.body.c[0]}
                </button>
                <button className="answer main-button "
                  onClick={() => handleAnswerOptionClick("D")}>
                  {question.body.d[0]}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default withRouter(QuizSession);
