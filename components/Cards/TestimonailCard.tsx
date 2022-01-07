import H2 from "components/Elements/H2";
import OverweightTitle from "components/Elements/OverweightTitle";
import P from "components/Elements/P";
import Subtitle from "components/Elements/Subtitle";
import BasicCard from "./BasicCard";

interface IProps {
    title: string;
    subtitle: string;
    children: any;
}

const TestimonailCard = (props: IProps) => {


    return <BasicCard>
        {/* TESTIMONIAL CARD */}
        
            <OverweightTitle extra backgroundTitle={props.title} >
                <H2>{props.title}</H2>
                <Subtitle className="my-10">{props.subtitle}</Subtitle>
            </OverweightTitle>
            
            <P className="my-7">
                {props.children}
            </P>

    </BasicCard>
}

export default TestimonailCard;