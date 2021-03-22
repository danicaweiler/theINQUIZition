import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./confetti.css";

function MainPage(props) {
  //set the amount of confetti
  const numConfetti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const confettiArray = numConfetti.map((nums) => (
    <div className='confetti' key={nums} />
  ));

  return (
    <div id='mainpage'>
      <div className='confetti-container'>{confettiArray}</div>
      <div className='game-header'>
        <h1>The InQUIZition</h1>
      </div>
      <div>
        <Link to='/create_quiz'>
          <button className='main-button'>Build Your Own</button>
        </Link>
        <br />
        <Link to='/select_quiz'>
          <button className='main-button alternate'>
            Play a Pre-built Quiz
          </button>
        </Link>
      </div>
      <div className='game-body'>
        <h1 className='sub'>How it Works</h1>
        <p>Build your own quiz, or use one we have made </p>
        <p> Get a shareable link to send to your friends </p>
        <p>The faster you answer right, the more points you get </p>
        <p>
          Watch the leaderboard change as you and your friends compete for the
          highest score
        </p>
      </div>
    </div>
  );
}
export default withRouter(MainPage);
