import React from "react";
import classes from './Select.module.scss'

interface MySelect {
    defaultValue: {value: string, name: string};
    options: {value: string, name: string}[];
    [x: string]: any;
}

const Select: React.FC<MySelect> = ({defaultValue, options, ...props}) => {
    return(
        <select {...props} className={classes.select}>
            <option value={defaultValue.value}>{defaultValue.name}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
};

export default Select;