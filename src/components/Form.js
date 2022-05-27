import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';
import Alert from './Alert';
import TittleLoginState from './TittleLoginState';


const Form = () => {

    const nameInput = ['yourName', 'email', 'password', 'repeatPassword']; // name attribute field

    const [login, setLogin] = useState(null);
    const [input, setInput] = useState({
        yourName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [alert, setAlert] = useState({
        msg: null
    });

    const showAlert = (msg, timeExp) => {
        setAlert({
            msg: msg
        })
        setTimeout(() => setAlert({ msg: null }), timeExp);
    };

    const showStateLogin = (state) => {
        setLogin(state);
        setTimeout(() => setLogin(null), 10000);
    }

    const [valid, setValid] = useState({
        yourName: null,
        email: null,
        password: null, //password verify length
        repeatPassword: null,  //repeatePassword verify equality
    });


    const changeForm = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => { //async probbably
        e.preventDefault(); 
        const { yourName, email, password, repeatPassword } = valid
        if (yourName && email && password && repeatPassword) {
            //fetching data to server for login
            showStateLogin(true);
            window.location.href = '/anywhere';

        } else {
            showStateLogin(false);
            let msgAlert = `it's impossible than you to be here`;
            showAlert(msgAlert, 5000);
        }

    }


    return (
        <form onChange={changeForm} onSubmit={onSubmit}>
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <TittleLoginState stateLogin={login} />
                </div>
                <Alert alert={alert} />
                {nameInput.map((name, i) => {
                    return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Label name={name} valid={valid} />
                            <Input name={name} input={input} setValid={setValid} valid={valid} showAlert={showAlert} />
                        </div>
                    )
                })}
                <div>
                    <button id="botton" type="submit" className='btn btn-dark btn-lg my-1'>
                        send
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form