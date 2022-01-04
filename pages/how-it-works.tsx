import Layout from "components/Layout";
import bodymovin, { AnimationItem } from 'lottie-web';
import animationData from 'components/Animations/howItWorks.json';
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HowItWorksIntro from "components/HowItWorks/HowItWorksIntro";

gsap.registerPlugin(ScrollTrigger);


interface IProps {

}

const HowItWorksPage = (props: IProps) => {


    return <Layout className="bg-white h-screen">

        

    </Layout>
}

export default HowItWorksPage;

// export const getStaticProps = async () => {
// 
// }