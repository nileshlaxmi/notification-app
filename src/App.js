import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirmation from './Confirmation/index'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      answer: false
    }
  }

  componentDidMount() {
    let url = 'http://www.json-generator.com/api/json/get/cenVogtRNK?indent=2'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          message: data.notification.message
        })
      })
  }

  accept = () => {
    this.setState({ answer: true })
  }

  decline = () => {
    this.setState({ answer: true })
  }

  renderConfirmPopUp = () => {
    const { answer } = this.state;

    if (answer) {
      return null;
    } else {
      return <Confirmation accept={this.accept} decline={this.decline} message={this.state.message} />
    }

  }
  render() {
    return (
      <div className="App">
        {this.renderConfirmPopUp()}
      </div>
    );
  }
}

export default App;
