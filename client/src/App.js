import React, { Component } from 'react';
import './App.css';
import GameHeader from './gameHeader';
import axios from 'axios'
import MakeQuiz from './makeQuiz';
import Confetti from './confetti';
import Rules from './rules';
class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <Confetti />
        <GameHeader />
        <div className="game-body">
          <MakeQuiz />
        </div>        
          <Rules />
       <p>{this.state.response.body}</p>
      </div>
    );
  }
}

export default App;