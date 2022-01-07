import Icon from "components/Elements/Icon";
import BasicCard from "./BasicCard";

interface IProps {
    children: any;
    icon: string;
}

const IconCard = (props: IProps) => {


    return <BasicCard>
        <div className='px-7 py-10'><Icon name={props.icon} width={50} /></div>
        {props.children}
    </BasicCard>
}

export default IconCard;