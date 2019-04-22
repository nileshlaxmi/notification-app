import React from 'react';

const ConfirmationComponent = (props) => {
    return (
        <div className="alert alert-info">
            <p>Reveal the answer?</p>
            <div className="btn-primary" onClick={() => props.confirmationAccepted()}>Yes Please</div>
            <div className="btn-danger" onClick={() => props.confirmationDeclined()}>Not Yet</div>
        </div>
    )
}

export default ConfirmationComponent;