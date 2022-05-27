export const emailValidator = (inputData) => {
    console.log('e.target or inputData from validatorForm: ', inputData); 
    const { value } = inputData;
    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const resultValidation = emailValid.test(value);
    if (resultValidation) {
        return true;
    } else {
        return false;
    }
}

export const minLengthValidator = (inputData, minLength) => {
    const { value } = inputData;
    //FALTA!!: Removedor de clase éxito error (clases css)
    if (value.length >= minLength) {
        return true;
    } else {
        return false;
    }
}

export const equalPasswordValidator = (password, repeatPassword) => {
    if (password === repeatPassword) {
        return true;
    } else {
        return false;
    }
}

export const emptyFieldValidator = (inputData) => {
    const { value } = inputData;
    if(value !== '') {
        return true; 
    } else {
        return false; 
    }
}