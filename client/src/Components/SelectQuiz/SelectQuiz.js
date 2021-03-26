import React from "react";
import { withRouter, Link } from "react-router-dom";

function SelectQuiz() {
  return (
  <div id='selectQuiz'>
    <div className='game-header'>
      <Link to='/'>
        <h1>The InQUIZition</h1>
      </Link>
    </div>
    <div className='game-body alternate'>
      <form className='form-body'>
        <h1 className="alternate">Select A Quiz</h1>
        <div className='form-group'>
        </div>
      </form>
    </div>
  </div>
  );
}
export default SelectQuiz;
