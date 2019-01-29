import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    const {disabled} = props;
    let classNames = [classes["button-text"]];
    if(disabled) {
        classNames = [...classNames, classes['disabled-button']];
    }
    return (
        <button {...props} className={classes["submit-button"]}>
                <span className={classNames.join(" ")}>
                    {props.children}
                </span>
        </button>
    );
}

export default Button;
