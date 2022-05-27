import React from 'react';
import { emailValidator, minLengthValidator, equalPasswordValidator, emptyFieldValidator } from '../utils/validatorForm';


const Input = (props) => {

    const { input, name, valid, setValid, showAlert } = props;
    const { password, repeatPassword } = input;

    const onBlur = (e) => {
        let msgAlert = '';
        //empty validation
        if (e.target) {
            let val = emptyFieldValidator(e.target);
            setValid({
                ...valid,
                [e.target.name]: val
            });
            if (!val) {
                msgAlert = `You left an empty field. Try to fill it`;
                showAlert(msgAlert, 5000);
            }
        }
        //email validation
        if (e.target.type === 'email') {
            let val = emailValidator(e.target);
            setValid({
                ...valid,
                [e.target.name]: val
            });
            if (!val) {
                msgAlert = 'Email not valid. Probably you forgot the @';
                showAlert(msgAlert, 5000);
            }
        }
        //password length validation
        if (e.target.name === 'password') {
            let passLength = 5;
            let val = minLengthValidator(e.target, passLength); //val is boolean variable
            setValid({
                ...valid,
                [e.target.name]: val
            });
            if (!val) {
                msgAlert = `Password length not valid. You need write ${passLength} characters at least`;
                showAlert(msgAlert, 5000);
            }
        }
        //passwords equal validation
        if (e.target.name === 'repeatPassword') {
            if (password !== '') {
                let val = equalPasswordValidator(password, repeatPassword);
                setValid({
                    ...valid,
                    [e.target.name]: val
                });
                if (!val) {
                    msgAlert = `Passwords are not equals`;
                    showAlert(msgAlert, 5000);
                }
            } else {
                msgAlert = `You have password field empty`;
                showAlert(msgAlert, 5000);
            }
        }
    }


    return (
        <input
            id={name}
            type={name === 'email' ? 'email' :
                name === 'password' ? 'password' :
                    name === 'repeatPassword' ? 'password' :
                        'text'}
            name={name}
            value={input[name]}
            onBlur={onBlur}
        />
    )
}

export default Input;


