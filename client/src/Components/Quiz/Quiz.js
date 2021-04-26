import React from "react";
import { Link, withRouter } from "react-router-dom";

function Quiz() {
  return (
    <div id='quiz'>
      <div className='game-header alternate'>
        <Link to='/'>
          <h2>The InQUIZition</h2>
        </Link>
      </div>
      <div className='game-body'>
        <div className='form-body'>
          <h2>title</h2>
          <label>
            Share this link with you friends:
            <input
              className='question-input'
              type='text'
              name='share-link'
              readOnly
            />
          </label>
          <br />
          <Link to='/quiz_session'>
            <button type='button' className='main-button'>
              Start!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Quiz);
