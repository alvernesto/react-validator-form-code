import React from 'react';

const TittleLoginState = (props) => {
    const { stateLogin } = props;
    console.log('props from Tittle: ', props)
    return (
        <>
            <h1>Your fav Form
                {stateLogin === true ? ' c:' :
                    stateLogin === false ? ' :c' : null}
            </h1>
            <p
                style={stateLogin === true ? { backgroundColor: 'green', color: 'white' } :
                    stateLogin === false ? { backgroundColor: 'red', color: 'white' } : null}>
                {stateLogin === true ? 'You are login' :
                    stateLogin === false ? `You're not even close to logging in` : null}
            </p>
        </>
    )
}

export default TittleLoginState; 