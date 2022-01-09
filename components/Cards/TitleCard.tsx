interface IProps {
    className?: string;
    children: any;
}

const TitleCard = (props: IProps) => {

    const defaultClasses = 'py-10 bg-no-repeat bg-left bg-cover'
    + ' lg:flex lg:justify-center lg:flex-column';

    const classes = [props.className, defaultClasses].join(' ');

    return <div className={classes}>
        {props.children}
    </div>
}

export default TitleCard;