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
        <QuizList
          columns={columns}
          data={data}
          propertyAsKey='quizId' //The data property to be used as a key
        />
        </div>
      </form>
    </div>
  </div>
  );
}

//Columns defines table headings and properties to be placed into the body
const columns = [{ heading: 'Select A Quiz', property: 'title' }, { heading: '', property: '' }];
//Data is the array of objects to be placed into the table
//Data will actully be a call to the backend

//dd a button column and route it to the specific quiz id

const data = [{ title: 'All About Edward Scissor Hands', quizId: '1234abcd' }, { title: 'Jackson 5', quizId: '1234abcd' }]

const QuizList = ({ columns, data, propertyAsKey }) => 
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

export default SelectQuiz;
