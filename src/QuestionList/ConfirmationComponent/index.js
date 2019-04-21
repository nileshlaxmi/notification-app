import React, { Component } from 'react';

class ConfirmationComponent extends Component {
    constructor(props){
        super(props);
    }

    confirmationAccepted = () => {
        this.props.confirmationAccepted();
    }

    confirmationDeclined = () => {
        this.props.confirmationDeclined();
    }

    render() {
        return (
            <div className="alert alert-info">
                <p>Reveal the answer?</p>
                <div className="btn-primary" onClick={this.confirmationAccepted}>Yes Please</div>
                <div className="btn-danger" onClick={this.confirmationDeclined}>Not Yet</div>
            </div>
        )
    }
}

export default ConfirmationComponent;