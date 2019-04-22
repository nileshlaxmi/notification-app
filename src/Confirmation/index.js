import React from 'react';

const Confirmation = (props) => {
    const acceptClickHandler = () => {
        props.accept();
    }

    const declineClickHandler = () => {
        props.decline();
    }

    return (
        <div>
            <div className="alert alert-info">
                <p>{props.message}</p>
                <div className="btn btn-primary" onClick={acceptClickHandler}>Sure</div>
                <br /><br />
                <div className="btn btn-danger" onClick={declineClickHandler}>No Thanks</div>
            </div>
        </div >
    )
}

export default Confirmation;