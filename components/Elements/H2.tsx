interface IProps {
    className?: string;
    children: any;
}

const H2 = (props: IProps) => {

    const defaultClasses = "px-7 text-4xl text-h2 font-header subpixel-antialiased";

    return <h2 className={[defaultClasses, props.className].join(' ')}>{props.children}</h2>
}

export default H2;