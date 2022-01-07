interface IProps {
    className?: string;
    children: any;
}

const TransparentCard = (props: IProps) => {

    const defaultClasses = 'my-10 pb-10';

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children};
    </div>
}

export default TransparentCard;