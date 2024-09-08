import React from "react";
import classes from './Button.module.scss'

interface MyButton {
    [x: string]: any;
    children: any;
}

const Button: React.FC<MyButton> = ({children, ...props}) => {
    return(
        <button {...props} className={classes.btn}>
            {children}
        </button>
    )
};

export default Button;