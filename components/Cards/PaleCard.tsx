interface IProps {
    className?: string;
    children: any;
}

const PaleCard = (props: IProps) => {

    const defaultClasses = 'my-10 pb-10 md md:w-[500px] lg:mt-0 lg:mb-2';

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children}
    </div>
}

export default PaleCard;