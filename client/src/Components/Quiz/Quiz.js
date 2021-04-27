import React, { useState } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
var qs = require('qs');

function Quiz(props) {
const id = qs.parse(props.location.search, { ignoreQueryPrefix: true }).id; //props.location.search;
const [sessionId, setSessionId] = useState(id);

  return (
    <div id='quiz'>
      <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className='game-body alternate'>
        <div className='form-body alternate'>
          <h1 className='alternate'>Custom Title Here</h1>
          <br />
          <label>
            <p>Share this link with you friends!</p>
            <input
              className='question-input' //populate from sessionID
              type='text'
              name='share-link'
              value= {'theinquizition.herokuapp.com/quiz?id=' + sessionId}
              onClick={() => {
                navigator.clipboard.writeText('theinquizition.herokuapp.com/quiz?id=' + sessionId);
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
            />
            <br/>
          </label>
          <button type='button' className='main-button'>
            Let's Play!
          </button>
          <br />
          <br />
          <br />
          <br />
          <h1 className='alternate'>Leaderboard</h1>
          <Leaderboard
            columns={columns}
            data={data}
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
//Data is the array of objects to be placed into the table
const data = [
  { username: "Sabrina", score: "60" },
  { username: "Max", score: "2" },
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
