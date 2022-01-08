import Icon from "./Icon";

interface IProps {
    icon: string;
}

const CardIcon = (props: IProps) => {

    return <div className='px-7 py-10'><Icon name={props.icon} width={50} /></div>;
}

export default CardIcon;