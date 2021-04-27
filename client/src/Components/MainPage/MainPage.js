import React from "react";
import { Link, withRouter } from "react-router-dom";

function MainPage(props) {
  //set the amount of confetti
  const numConfetti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const confettiArray = numConfetti.map((nums) => (
    <div className='confetti' key={nums} />
  ));

  return (
    <div id='mainpage'>
      <div className='game-header'>
      <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className="game-body">
      <div className='confetti-container'>{confettiArray}</div>
      <h1>Ready for some friendly competition?</h1>
        <Link to='/create_quiz'>
          <button className='main-button'>Build Your Own</button>
        </Link>
        <Link to='/select_quiz'>
          <button className='main-button alternate'>
            Play a Pre-built Quiz
          </button>
        </Link>
        </div>
        <div className="form-body">
        <h1 className='alternate'>How it Works</h1><ul>
        <li>Build your own quiz, or use one we have made </li>
        <li> Get a shareable link to send to your friends </li>
        <li>The faster you answer right, the more points you get </li>
        <li>
          Watch the leaderboard change as you and your friends compete for the
          highest score
        </li></ul>
      </div>
    </div>
   
  );
}
export default withRouter(MainPage);
