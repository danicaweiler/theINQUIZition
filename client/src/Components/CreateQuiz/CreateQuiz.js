import React, { useState } from "react";

const QuestionInput = () => {
  return (
  <div>
    <label>Question:<br />
      <input className="question-input main" placeholder="Your question here" />
    </label><br />
    <label><input type="radio" id="A" name="question"/> A 
      <input className="question-input" placeholder="Your first answer here" /></label><br />
    <label><input type="radio" id="B"  name="question"/> B 
      <input className="question-input" placeholder="Your second answer here" /></label><br />
    <label><input type="radio" id="C"  name="question"/> C 
      <input className="question-input" placeholder="Your third answer here" /></label><br />
    <label><input type="radio" id="D"  name="question" /> D 
      <input className="question-input" placeholder="Your fourth answer here" /></label><br />
    <br /><br />
  </div>
  );
};

const CreateQuiz = () => {
  const [questionList, setQuestionList] = useState([]);

  const onAddBtnClick = event => {
    setQuestionList(questionList.concat(<QuestionInput key={questionList.length} />));
  };

  return (
  <div id="createQuiz">
    <div className='game-header alternate'>
      <h2>The InQUIZition</h2>
    </div>
    <div className="game-body">
      <form className="form-body" action="/action_page.php">
    <h2>Build Your Quiz</h2>
      <label>
        Username: 
        <input className="question-input" type="text" name="name" />
      </label>
    <br />
      <label>
        Quiz Title: 
        <input className="question-input" type="text" name="title" />
      </label>
    <br /><br />
    <hr /><br />
    <div>
      {questionList}
    </div>
        <button type="button" className='main-button alternate' onClick={onAddBtnClick}>Add Question</button><br />
        <button type="button" className='main-button'>Create!</button>
    </form>
    </div>
  </div>
  );
};

export default CreateQuiz;
