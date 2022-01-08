import React from "react";

interface IProps {
    className?: string;
    tight?: boolean;
    children: any;
}

const P = (props: IProps) => {

    const defaultClasses = "text-xl font-body subpixel-antialiased leading-8";
    const marginClass = props.tight ? '' : 'my-6';
    let paddingClass = 'px-7';
    

    const classes = [marginClass, paddingClass, defaultClasses, props.className].join(' ')

    return <div className={classes}>
        {props.children}
    </div>
}

export default P;