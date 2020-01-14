import React from 'react';

//This is a regular JS function
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>  
    );
};

export default withClass;