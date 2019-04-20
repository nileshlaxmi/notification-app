import React, { Component } from 'react';
import './App.css';
import Notification from './Notification/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationText: '',
      type: ''
    }
  }

  componentDidMount() {
    let url = 'http://www.json-generator.com/api/json/get/cfSLSdTyqa?indent=2';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          notificationText: data.notification ? data.notification.message : "",
          type: data.notification ? data.notification.type : ""
        })
      })
  }

  render() {
    const { notificationText, type } = this.state;
    let typeClass;

    if (type === "success") {
      typeClass = "alert alert-success"
    } else if (type === "message") {
      typeClass = "alert alert-info"
    } else if (type === "caution") {
      typeClass = "alert alert-warning"
    } else if (type === "error") {
      typeClass = "alert alert-danger"
    } else if (type === "") {
      typeClass = "alert alert-info"
    }

    return (
      <div className="App">
        {notificationText && <Notification notificationText={notificationText} typeClass={typeClass} />}
      </div>
    );
  }
}

export default App;
