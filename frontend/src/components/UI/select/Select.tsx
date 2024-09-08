import React from "react";
import classes from './Select.module.scss'

interface MySelect {
    [x: string]: any;
    children: any;
}

const Select: React.FC<MySelect> = ({children, ...props}) => {
    return(
        <select {...props} className={classes.select}>
            {children}
        </select>
    )
};

export default Select;