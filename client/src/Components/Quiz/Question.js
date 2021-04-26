import React, { useState } from 'react';
import { Link, withRouter, useLocation } from "react-router-dom";

const useQuery= () => {
  return new URLSearchParams(useLocation().search);
}

function Question(props) {
  const id =  useQuery().get('id');
  const question =  useQuery().get('question');
  const [sessionId, setSessionId] = useState(id);
  const [questionNum, setQuestionNum] = useState(question);

  return (
    <div id='quiz'>
      <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className='game-body alternate'>
        <div className='form-body'>
          <h1 className="alternate">Custom Title Here</h1><br/>
          <div className='form-group'>
          <label>
            <p className='question-input main question'>Question goes here...</p>
          </label><br />
          <input className="answer" type='radio' id='answerA' name='answer' onChange={(e) => this.setAnswer(e, "A")} defaultChecked /> Answer A<br />
          <input className="answer" type='radio' id='answerB' name='answer' onChange={(e) => this.setAnswer(e, "B")}  /> Answer B<br />
          <input className="answer" type='radio' id='answerC' name='answer' onChange={(e) => this.setAnswer(e, "C")}  /> Answer C<br />
          <input className="answer" type='radio' id='answerD' name='answer' onChange={(e) => this.setAnswer(e, "D")}  /> Answer D<br />
          <br />
          <div className="right">
          <button type='button' className='main-button small'>
            Next Question 
          </button></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default withRouter(Question);
