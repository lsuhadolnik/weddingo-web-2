import Layout from "components/Layout";
import bodymovin, { AnimationItem } from 'lottie-web';
import animationData from 'components/Animations/howItWorks.json';
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HowItWorksIntro from "components/HowItWorks/HowItWorksIntro";
import { requireCollection } from "lib/requireCollection";
import { CMSCollection, HowItWorksSlideData } from "lib/types";
import HowItWorksSlide from "components/HowItWorks/HowItWorksSlide";

gsap.registerPlugin(ScrollTrigger);


interface IProps {
    collections: {
        howItWorksSlide: HowItWorksSlideData[];
    }
}

const HowItWorksPage = (props: IProps) => {


    return <Layout notPadded className="bg-white">

        {
            props.collections.howItWorksSlide
                .sort((s1: HowItWorksSlideData, s2: HowItWorksSlideData) => s1.data.order - s2.data.order)
                .map((slide: any) => (
                    <HowItWorksSlide key={slide.order} slide={slide} />
            ))
        }

    </Layout>
}

export default HowItWorksPage;

export const getStaticProps = async () => {

    const howItWorksSlide = await requireCollection('howItWorksSlide');

    return {
        props: {
            collections: {
                howItWorksSlide
            }
        }
    }

}