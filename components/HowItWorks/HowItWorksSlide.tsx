import { HowItWorksSlideData } from "lib/types";
import ReactMarkdown from "react-markdown";

interface IProps {
    slide: HowItWorksSlideData;
}

const HowItWorksSlide = (props: IProps) => {


    const {content, data} = props.slide;
    const {type} = data;

    if (type === 'title') {

    } else {
        
    }

    return <div className="mb-4 h-20">
        <ReactMarkdown className="px-5 text-base">
            {props.slide.content}
        </ReactMarkdown>
    </div>
}

export default HowItWorksSlide;