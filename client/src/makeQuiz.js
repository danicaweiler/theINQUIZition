import React, { Component } from 'react';

class MakeQuiz extends React.Component {
    render() {
      return (
        <div>
          <button className="main-button">Build Your Own</button>
          <br/>
          <button className="main-button alternate" >Play a Pre-built Quiz</button>
        </div>
      );
    }
  }

export default MakeQuiz;