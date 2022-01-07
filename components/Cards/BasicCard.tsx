interface IProps {
    className?: string;
    children: any;
}

const BasicCard = (props: IProps) => {

    const defaultClasses = 'my-10 pb-10 bg-white';

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children};
    </div>
}

export default BasicCard;