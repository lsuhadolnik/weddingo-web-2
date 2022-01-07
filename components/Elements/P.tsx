interface IProps {
    className?: string;
    children: any;
}

const P = (props: IProps) => {

    const defaultClasses = "px-7 text-xl font-body subpixel-antialiased leading-8";

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children}
    </div>
}

export default P;