import React from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      questions: [],
      title: "",
      sessionId: "1",
      question: "",
    };

    this.validator = new SimpleReactValidator();
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.QuestionInput = this.QuestionInput.bind(this);
    this.setTitle = this.setTitle.bind(this);

    this.setQuestion = this.setQuestion.bind(this);
    this.setAnswerA = this.setAnswerA.bind(this);
    this.setAnswerB = this.setAnswerB.bind(this);
    this.setAnswerC = this.setAnswerC.bind(this);
    this.setAnswerD = this.setAnswerD.bind(this);
  }

  onAddBtnClick() {
    this.validator.hideMessages();

    var validQuestions = this.state.questions;
    var newQuestionBase = {
      question: "",
      answerA: "",
      answerB: "",
      answerC: "",
      answerD: "",
      correctAnswer: "A" 
    };
    validQuestions.push(newQuestionBase);

    var newList = this.state.questionList;
    var newElem = this.QuestionInput(newList.length + 1);
    newList.push(newElem);

    this.setState({
      questionList: newList,
      questions: validQuestions,
    });
  }

  submitForm() {
    this.validator.hideMessages();
    if (this.validator.allValid()) {
      alert("You submitted the form and stuff!");
      const data = {
        title: this.state.title,
        questions: this.state.questions
      };
      axios.post("/api/v1/create-quiz", data).then((res) => {
         this.state.sessionId = res.data;
      });
      this.props.history.push({
        pathname: '/quiz',
        search:'id=' + this.state.sessionId
      })
      this.props.history.push("/quiz?id=" + this.state.sessionId);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  QuestionInput(props) {
    return (
      <div key={props}>
        <label>
          Question {props}:<br />
          <input
            name='question'
            type='text'
            onChange={(e) => this.setQuestion(e, props)}
            className='question-input main'
            placeholder='Your question here'
          />
        </label>
        <br />
        <label>
          <input type='radio' id='answerA' name={props} onChange={(e) => this.setCorrectAnswer(e, props, "A")} defaultChecked /> A
          <input
            name='A'
            onChange={(e) => this.setAnswerA(e, props)}
            className='question-input'
            placeholder='Your first answer here'
          />
        </label>
        <br />
        <label>
          <input type='radio' id='answerB' name={props} onChange={(e) => this.setCorrectAnswer(e, props, "B")}/> B
          <input
            name='B'
            onChange={(e) => this.setAnswerB(e, props)}
            className='question-input'
            placeholder='Your second answer here'
          />
        </label>
        <br />
        <label>
          <input type='radio' id='answerC' name={props}  onChange={(e) => this.setCorrectAnswer(e, props, "C")}/> C
          <input
            name='C'
            onChange={(e) => this.setAnswerC(e, props)}
            className='question-input'
            placeholder='Your third answer here'
          />
        </label>
        <br />
        <label>
          <input type='radio' id='answerD' name={props}
            onChange={(e) => this.setCorrectAnswer(e, props, "D")} /> D
          <input
            name='D'
            onChange={(e) => this.setAnswerD(e, props)}
            className='question-input'
            placeholder='Your fourth answer here'
          />
        </label>
        <br />
        <br />
        <br />
      </div>
    );
  }

  setTitle(e) {
    this.setState({ title:  e.target.value });
  }

  setQuestion(e, props) {
    var index = Number(props); 
    var validQuestions = this.state.questions;
    validQuestions[index -1].question = e.target.value;

    this.setState({
      questions: validQuestions
    });

    this.setState({ question: e.target.value + props });
  }

  setAnswerA(e, props) {
    var index = Number(props);
    var validQuestions = this.state.questions;
    validQuestions[index - 1].answerA = e.target.value;

    this.setState({
      questions: validQuestions,
    });
  }

  setAnswerB(e, props) {
    var index = Number(props); 
    var validQuestions = this.state.questions;
    validQuestions[index -1].answerB = e.target.value;

    this.setState({
      questions: validQuestions,
    });
  }
  
  setAnswerC(e, props) {
    var index = Number(props);
    var validQuestions = this.state.questions;
    validQuestions[index -1].answerC = e.target.value;

    this.setState({
      questions: validQuestions,
    });
  }

  setAnswerD(e, props) {
    var index = Number(props);
    var validQuestions = this.state.questions;
    validQuestions[index -  1].answerD = e.target.value;

    this.setState({
      questions: validQuestions,
    });
  }

  setCorrectAnswer(e, props, which) {
    var index = Number(props);
    var validQuestions = this.state.questions;
    validQuestions[index - 1].correctAnswer = which;

    this.setState({
      questions: validQuestions,
    });
  }

  render() {
    return (
      <div id='createQuiz'>
        <div className='game-header'>
        <Link to='/'>
          <h1>The InQUIZition</h1>
        </Link>
        </div>
        <div className='game-body alternate'>
          <form className='form-body'>
            <h1 className="alternate">Build Your Quiz</h1>
            <div className='form-group'>
              <label>
                Quiz Title:
                <input
                  className='question-input'
                  value={this.state.title}
                  onChange={this.setTitle}
                  type='text'
                  name='title'
                />
                {this.validator.message(
                  "title",
                  this.state.title,
                  "required|min:3|max:120"
                )}
              </label>
            <br />
            <br />
            <hr />
            <br />
            <div>{this.state.questionList}</div>
            <button
              type='button'
              className='main-button alternate'
              onClick={this.onAddBtnClick}>
              Add a Question
            </button>
            <br />
            <button
              type='button'
              className='main-button'
              onClick={this.submitForm}>
              Done! Make it!
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateQuiz);
