import BasicCard from "./BasicCard";

interface IProps {
    className?: string;
    children: any;

    image: string;
}

const SideImageCard = (props: IProps) => {

    const defaultClasses = 'bg-white';

    return <BasicCard className={[defaultClasses, props.className].join(' ')}>
        {props.children}

        <img src={props.image} />
    </BasicCard>
}

export default SideImageCard;