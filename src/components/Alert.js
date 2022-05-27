import React from 'react'; 

const Alert = (props) => {
    const { alert } = props;

    return (
        alert !== null && (
            <div className='container'>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
        )
    )
}

export default Alert; 