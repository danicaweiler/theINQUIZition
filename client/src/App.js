import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import SelectQuiz from "./Components/SelectQuiz/SelectQuiz";
import Quiz from "./Components/Quiz/Quiz";
import QuizSession from "./Components/Quiz/QuizSession";
import "./App.css";
import "./confetti.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={() => <MainPage />} />
          <Route path='/create_quiz' exact component={() => <CreateQuiz />} />
          <Route path='/select_quiz' exact component={() => <SelectQuiz />} />
          <Route path='/quiz' exact component={() => <Quiz />} />
          <Route path='/quiz_session' exact component={() => <QuizSession />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
