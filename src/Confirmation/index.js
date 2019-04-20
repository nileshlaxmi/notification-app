import React, {Component} from 'react';

class Confirmation extends Component{
    constructor(props){
        super(props);
    }

    acceptClickHandler = () => {
        this.props.accept();
    }

    declineClickHandler = () => {
        this.props.decline();
    }

    render(){
        return (
            <div>
                <div className="alert alert-info">
                    <p>{this.props.message}</p>
                    <div className="btn btn-primary" onClick={this.acceptClickHandler}>Sure</div>
                    <br /><br />
                    <div className="btn btn-danger" onClick={this.declineClickHandler}>No Thanks</div>
                </div>
            </div >
        ) 
    }
    
}

export default Confirmation;