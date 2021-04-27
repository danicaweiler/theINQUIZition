import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
var qs = require('qs');

function Quiz(props) {
  const quizId = qs.parse(props.location.search, { ignoreQueryPrefix: true }).id;
  const [leaderboard, setLeaderboard] = useState([]);
  const [title, setTitle] = useState("Loading...");
  const refText=useRef(null);

  //Leaderboard
  useEffect(() => {
    (async () => {
      await axios.get('/api/v1/get-leaderboard', {
        params: {
          quizID: quizId
        }
      }).then((res) => {
        console.log(res.data)
        setLeaderboard(res.data.body.users)
        console.log(leaderboard)
      });
    })()
  }, [])

  //Title
  useEffect(() => {
    (async () => {
      await axios.get('/api/v1/get-quiz', {
        params: {
          quizID: quizId
        }
      }).then((res) => {
        setTitle(res.data.body.title)
      });
    })()
  }, [])

  return (
    <div id='quiz'>
      <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className='game-body alternate'>
        <div className='form-body alternate'>
          <h1 className='alternate'>{title}</h1>
          <br />
          <label>
            <p>Share this link with you friends!</p>
            <input
              className='question-input' //populate from quizId
              type='text'
              name='share-link'
              value={'theinquizition.herokuapp.com/quiz?id=' + quizId }
              onClick={() => {
                navigator.clipboard.writeText('theinquizition.herokuapp.com/quiz?id=' + quizId);
              }}
              readOnly
            />
          </label>
          <br />
          <br />
          <br />
          <br />
          <label>
            <p>Enter your name:</p>
            <input
              type='text'
              name='username'
              ref={refText}
            />
            <br />
          </label>
          <Link to={
            '/quiz_session?id=' + quizId
          }>
            <button type='button' className='main-button' onClick={() => {
              const name = refText.current.value;
              const data = {
                username: name,
                quizID: quizId
              };
              axios.post("/api/v1/create-user", data).then((res) => {
                localStorage.setItem('UserID', res.data.body.userID);
              });
            }}>
              Let's Play!
          </button></Link>
          <br />
          <br />
          <br />
          <br />
          <h1 className='alternate'>Leaderboard</h1>
          <Leaderboard
            columns={columns}
            data={
              leaderboard.length > 0 ? leaderboard : [{ username: "", score: 0 }]
            }
            propertyAsKey='username' //The data property to be used as a key
          />
        </div>
      </div>
    </div>
  );
}

//Columns defines table headings and properties to be placed into the body
const columns = [
  { heading: "Username", property: "username" },
  { heading: "Score", property: "score" },
];

const Leaderboard = ({ columns, data, propertyAsKey }) => (
  <table className='table'>
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={`header-${col.heading}`}>{col.heading}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={`${item[propertyAsKey]}-row`}>
          {columns.map((col) => (
            <td key={`${item[propertyAsKey]}-${col.property}`}>
              {item[col.property]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default withRouter(Quiz);
