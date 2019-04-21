import React, { Component } from 'react';
import './index.css'

class QuestionContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAnswerFlag : false,
            confirmationFlag: false
        }
    }

    showAnswer = () => {
        this.setState({ showAnswerFlag: true})
    }

    confirmationAccepted = () => {
        this.setState({ confirmationFlag: true})
    }

    confirmationDeclined = () => {
        this.setState({ 
            confirmationFlag: false,
            showAnswerFlag: false
        })
    }

    renderQuestions = ()=> {
        const { questionsObject } = this.props;
        const { showAnswerFlag, confirmationFlag } = this.state;
        if (showAnswerFlag === false && confirmationFlag === false){
            return (
                <div className="container">
                    <p className="question">{questionsObject.question}</p>
                    <div className="btn btn-primary show-answer" onClick={this.showAnswer}>Show Answer</div>
                </div>
            )
        } else if (showAnswerFlag && confirmationFlag === false){
            return (
                <div className="container">
                    <div className="alert alert-info">
                        <p>Reveal the answer?</p>
                        <div className="btn-primary" onClick={this.confirmationAccepted}>Yes Please</div>
                        <div className="btn-danger" onClick={this.confirmationDeclined}>Not Yet</div>
                    </div>
                    <p className="question">{questionsObject.question}</p>
                    <div className={showAnswerFlag ? "btn btn-info disabled" : "btn btn-primary show-answer"} disabled={showAnswerFlag}>Show Answer</div>
                </div>
            )
            
        } else if (showAnswerFlag && confirmationFlag){
            return (
                <div className="container">
                    <p className="question">{questionsObject.question}</p>
                    <p className="answer">{questionsObject.answer}</p>
                    <div className={showAnswerFlag ? "btn btn-info disabled" : "btn btn-primary show-answer"} disabled={showAnswerFlag}>Show Answer</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderQuestions()}
            </div>
        )
    }
}

export default QuestionContainer;