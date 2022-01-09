interface IProps {
    children: any;
    className: any;
}

const Column = (props: IProps) => {

    const defaultClasses = 'self-center';

    return <div className={[defaultClasses, props.className].join(' ')}>{props.children}</div>
}

export default Column;