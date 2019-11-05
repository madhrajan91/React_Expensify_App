// higher order component - A component (HOC) that renders another component
// Goal Reuse code
// Render hijacking
// Prop manipulation
// Abstract state 

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> This info is: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {(() => {
                if (props.isAdmin) {
                    console.log("inside");
                    return (<p> Admin</p>);
                }
                else {
                    return (<p>Not Admin</p>);
                } 
            })()
            }
                
            
            <p> This is private info. Please don't share</p>
            <WrappedComponent {...props}/>
        </div>
    )
};

// requireAuthenticaiton
const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAuthenticated && <p>Welcome AUthenticated User</p>}
                <WrappedComponent {...props} />
            </div>
        )
    }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));