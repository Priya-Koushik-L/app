import React from 'react';

const User = props => (
    <ul>
        {
                <div>
                <li key={props.index}>{props.item}</li>
                <button onClick={props.delEvent}>Delete</button>
                </div>
        }
    </ul>
);

export default User;