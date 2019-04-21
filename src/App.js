import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from './QuestionList/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionList />
      </div>
    );
  }
}

export default App;
