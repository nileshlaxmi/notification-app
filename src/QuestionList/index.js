import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer/index';

class QuestionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionsArray: []
        }
    }

    componentDidMount() {
        let url = "http://www.json-generator.com/api/json/get/bTxXUrHImW?indent=2";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ questionsArray: data.questions })
            })
    }

    renderQuestionContainer = () => {
        const { questionsArray } = this.state;
        if (questionsArray.length > 0) {
            return (
                questionsArray.map((questionsObject, index) => {
                    return <QuestionContainer questionsObject={questionsObject} index={index} />
                })
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderQuestionContainer()}
            </div>
        )
    }
}

export default QuestionList;