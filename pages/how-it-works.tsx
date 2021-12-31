import Layout from "components/Layout";
import bodymovin, { AnimationItem } from 'lottie-web';
import animationData from 'components/Animations/howItWorks.json';
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HowItWorksIntro from "components/HowItWorks/HowItWorksIntro";
import Container from "components/Container";

gsap.registerPlugin(ScrollTrigger);


interface IProps {

}

const HowItWorksPage = (props: IProps) => {

    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        let animation: AnimationItem | null = null;

        if (animationRef.current) {
            animation = bodymovin.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: false,
                animationData,
            })


            let endString = "+=2000";
            ScrollTrigger.create({
                trigger: animationRef.current,
                scrub: true,
                pin: true,
                start: "top top+=100",
                markers: true,
                end: endString, 
                onUpdate: (self: any) => {
                    if (animation) {
                        animation.goToAndStop(self.progress *  (animation.totalFrames - 1), true);
                    }
                }
            });  

        }

        return () => {
            if (animation) { animation.destroy(); }
        }


    }, [animationRef]);


    return <Layout style={{background: 'var(--color-white)'}}>

        <HowItWorksIntro siteParts={{}}/>

        <div style={{
            backgroundColor: 'var(--color-bg)'
        }} ref={animationRef}></div>

    </Layout>
}

export default HowItWorksPage;