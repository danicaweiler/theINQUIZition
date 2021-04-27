import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


//Columns defines table headings and properties to be placed into the body
const columns = [{ heading: 'Select A Quiz', property: 'title' }];

function SelectQuiz() {
  const [data, setData] = useState( [{ title: 'Loading...', quizId: 'abcd' }]);
  
  useEffect(() => {
    (async () => {
      await axios.get('/api/v1/get-all-quizzes').then((res) => {
        console.log(res)
         setData(res.data.body.quizzes)
        });
    })()
  }, [])

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

const QuizList = ({ columns, data, propertyAsKey }) => {
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
              <Link to={
                'quiz?id=' + item._id
              }>
                <button type='button' id={item._id}>Play!</button></Link>
            </td>))}
        </tr>
      )}
    </tbody>
  </table>);
};

export default SelectQuiz;
