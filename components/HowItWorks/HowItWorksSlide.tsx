import CallToAction from "components/Elements/CallToAction";
import MarkdownLoader from "components/Markdown/MarkdownLoader";
import { HowItWorksSlideData } from "lib/types";

interface IProps {
    slide: HowItWorksSlideData;
}

const HowItWorksSlide = (props: IProps) => {


    const {content, data} = props.slide;
    const {type} = data;

    if (type === 'title') {

    } else {
        
    }

    return <div className="mb-4">
        <MarkdownLoader
            components={{
                h1: (props: any) => <h1 className='px-4 text-header pb-5'>{props.children}</h1>,
                h2: (props: any) => <h1 className='px-4 text-header2 text-red'>{props.children}</h1>,
                p: (props: any) => <p className='px-4 pb-5 text-body'>{props.children}</p>,
                CallToAction: (props: any) => <div className="flex justify-center m-5">
                    <CallToAction>{props.children}</CallToAction>
                </div>
            }}>
            {props.slide.content}
        </MarkdownLoader>
    </div>
}

export default HowItWorksSlide;