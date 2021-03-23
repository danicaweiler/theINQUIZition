import React from "react";
import SimpleReactValidator from 'simple-react-validator';

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      questionList: [],
      questions: [ { question: "", answerA: "", answerB: "", answerC: "", answerD: "" } ],
      username: "",
      title: ""
    };
    
  this.validator = new SimpleReactValidator();
  this.onAddBtnClick = this.onAddBtnClick.bind(this);
  this.submitForm = this.submitForm.bind(this);
  this.QuestionInput = this.QuestionInput.bind(this);
  this.setTitle = this.setTitle.bind(this);
  this.setUsername = this.setUsername.bind(this);
  }

  onAddBtnClick() {
    this.validator.hideMessages()
    
    var validQuestions = this.state.questions;
    var newQuestionBase = { question: "", answerA: "", answerB: "", answerC: "", answerD: "" };
    validQuestions.push(newQuestionBase);

    var newList = this.state.questionList;
    var newElem = this.QuestionInput(newList.length + 1)
    newList.push(newElem);

    this.setState({
      questionList: newList,
      questions: validQuestions
    });
  };

  submitForm() {
    this.validator.hideMessages();
    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
      //Send form data to server here
      // redirect to quiz page
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  QuestionInput(props) {
    return (
    <div key={props}>
      <label>Question {props}:<br />
        <input name="question" type="text" className="question-input main" placeholder="Your question here" />
      </label><br />
      <label><input type="radio" id="answerA" name= {props} defaultChecked/> A 
        <input name="A" className="question-input" placeholder="Your first answer here" />
      </label><br />
      <label><input type="radio" id="answerB"  name= {props}/> B 
        <input name="B" className="question-input" placeholder="Your second answer here" />
      </label><br />
      <label><input type="radio" id="answerC" name= {props}/> C 
        <input name="C" className="question-input" placeholder="Your third answer here" />
      </label><br />
      <label><input type="radio" id="answerD"  name= {props} /> D 
        <input name="D" className="question-input" placeholder="Your fourth answer here" />
      </label><br />
      <br /><br />
    </div>
    );
  }

  setTitle(e) {
    this.setState({title: e.target.value});
  }

  setUsername(e) {
    this.setState({username: e.target.value});
  }

  setAnswerC(e) {
    console.log(e)
  }

  render() {
    return (
  <div id="createQuiz">
    <div className='game-header alternate'>
      <h2>The InQUIZition</h2>
    </div>
    <div className="game-body">
      <form className="form-body">
    <h2>Build Your Quiz</h2><div className="form-group">
      <label>
        Username: 
        <input className="question-input" onChange={this.setUsername} value={this.state.username} type="text" name="username" />
        {this.validator.message('username', this.state.username, 'required|min:3|max:40')}
      </label></div>
    <br /><div className="form-group">
      <label>
        Quiz Title: 
        <input className="question-input" value={this.state.title} onChange={this.setTitle} type="text" name="title" />
        {this.validator.message('title', this.state.title, 'required|min:3|max:120')}
      </label></div>
    <br /><br />
    <hr /><br />
    <div>
      {this.state.questionList}
    </div>
        <button type="button" className='main-button alternate' onClick={this.onAddBtnClick}>Add Question</button><br />
        <button type="button" className='main-button' onClick={this.submitForm}>Create!</button>
    </form>
    </div>
  </div>
  );
}
}


export default CreateQuiz;
