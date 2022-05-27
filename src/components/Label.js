import React from 'react';

const Label = (props) => {

    const { name, valid } = props;

    return (
        <label
            className={valid[name] !== null ?
                (valid[name] ? 'text-success' :
                    'text-danger')
                : null}>

            {name === 'yourName' ? 'Name' :
                name === 'email' ? 'Email' :
                    name === 'password' ? 'Password' :
                        name === 'repeatPassword' ? 'Repeat password...' : null}

        </label>
    )
}

export default Label;