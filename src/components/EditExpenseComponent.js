import React from 'react';

const EditExpenseComponent = (props) => {
    console.log(props);
    // query strings 
    // hash
    console.log(props.location.search);
    console.log(props.location.hash);
    return (
        <div>
            Edit  with id of {props.match.params.id}
        </div>
    )
}

export default EditExpenseComponent;