import React from 'react';

const Notification = (props) => {
    return(
        <div>
            <div className={props.typeClass}>{props.notificationText}</div> 
        </div>
    )
} 

export default Notification;