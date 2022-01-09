import PaleCard from "./PaleCard";

interface IProps {
    className?: string;
    children: any;
}

const BasicCard = (props: IProps) => {

    const defaultClasses = 'bg-white';

    return <PaleCard className={[defaultClasses, props.className].join(' ')}>
        {props.children}
    </PaleCard>
}

export default BasicCard;