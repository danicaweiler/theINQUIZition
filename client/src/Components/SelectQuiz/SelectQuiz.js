import React from "react";

import { Route, Redirect, withRouter, Link } from "react-router-dom";

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
const columns = [{ heading: 'Select A Quiz', property: 'title' }];
const data = [{ title: 'All About Edward Scissor Hands', quizId: '1234abcd' }, { title: 'Jackson 5', quizId: '1234abcd' }]

const QuizList = ({ columns, data, propertyAsKey }) => {

const onPlayClick = (id) => {
  alert(`Hello, lets play the quiz by id: ${id}!`);
}

return (<table className='table'>
        <thead>
            <tr>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(item =>
                <tr key={`${item[propertyAsKey]}-row`}>
                    {columns.map((col) => (
                    <td key={`${item[propertyAsKey]}-${col.property}`}>
                      {item[col.property]}
                    <br />
                    <Link to= {
                      'quiz?id=' + item.quizId
                    }>
                    <button type='button' id={item.quizId} onClick={() => {
                        onPlayClick(item.quizId);
                      }}>Play!</button></Link>
                </td>))}
              </tr>
            )}
        </tbody>
    </table>);
};

export default SelectQuiz;
