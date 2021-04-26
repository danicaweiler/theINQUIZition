import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import MainPage from "./Components/MainPage/MainPage";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import SelectQuiz from "./Components/SelectQuiz/SelectQuiz";
import Quiz from "./Components/Quiz/Quiz";
import QuizSession from "./Components/Quiz/QuizSession";
import "./App.css";

function App() {
  //TEMP WILL NEED TO BE MOVED INTO IT'S OWN FILE with useEffect
  const [response, setResponse] = useState([]);

  //This will get the reponse from the server when the component loads
  useEffect(() => {
    axios.get("/api/v1/say-something").then((res) => {
      setResponse(res.data);
    });
  }, []);

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
      <hr />
      <h4>Server response for testing</h4>
      <p>{response.body}</p>
    </div>
  );
}

export default App;
