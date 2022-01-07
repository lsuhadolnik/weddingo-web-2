interface IProps {
    className?: string;
    children: any;
}

const Subtitle = (props: IProps) => {

    const defaultClasses = "px-7 py-2 font-body text-sm text-gray";

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children}
    </div>;
}

export default Subtitle;