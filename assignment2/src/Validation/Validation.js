import React from 'react';

const validation = (props) => {
    
    let message = 'Text too short!';
    
    if (props.textLength > 5) {
        message = 'Text long enough!';
    }
    
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default validation;