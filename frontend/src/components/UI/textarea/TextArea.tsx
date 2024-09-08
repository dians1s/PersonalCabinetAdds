import React from "react";
import classes from './TextArea.module.scss'

interface MyTextArea {
    id: string;
    children: string;
    labelText: string;
    [x: string]: any;
}

const TextArea: React.FC<MyTextArea> = ({id, children, labelText, ...props}) => {

    return(<>
            <label htmlFor={id}>{labelText}</label>
            <textarea id={id} className={classes.textArea} {...props} >
                {children}
            </textarea>
        </>
    )
}

export default TextArea;