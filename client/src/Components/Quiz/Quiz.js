import React, { useState } from 'react';
import { Link, withRouter, useLocation } from "react-router-dom";

const useQuery= () => {
  return new URLSearchParams(useLocation().search);
}

function Quiz(props) {
  const id =  useQuery().get('id');// props.location.search;
  const [sessionId, setSessionId] = useState(id);

  console.log(id);
  return (
    <div id='quiz'>
      <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
      </div>
      <div className='game-body alternate'>
        <div className='form-body alternate'>
          <h1 className="alternate">Custom Title Here</h1><br/>
          <label>
            <p>Share this link with you friends!</p>
            <input
              className='question-input'
              type='text'
              name='share-link'
              readOnly
            />
          </label>
          <br />
          <button type='button' className='main-button'>
            Let's Play!
          </button>
          <br /><br /><br /><br />
          <h1 className="alternate">Leaderboard</h1>
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
const columns = [{ heading: 'Username', property: 'username' }, { heading: 'Score', property: 'score' }];
//Data is the array of objects to be placed into the table
const data = [{ username: 'Sabrina', score: '60' }, { username: 'Max', score: '2' }]

const Leaderboard = ({ columns, data, propertyAsKey }) => 
    <table className='table'>
        <thead>
            <tr>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(item =>
                <tr key={`${item[propertyAsKey]}-row`}>
                    {columns.map(col => <td key={`${item[propertyAsKey]}-${col.property}`}>{item[col.property]}</td>)}
                </tr>
            )}
        </tbody>
    </table>

export default withRouter(Quiz);
