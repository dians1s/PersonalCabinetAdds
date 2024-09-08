import React from "react";
import classes from './Input.module.scss'

interface MyInput {
    [x: string]: any;
}

const Input: React.FC<MyInput> = (props) => {
    return(
        <input className={classes.input} {...props}/>
    )
};

export default Input;