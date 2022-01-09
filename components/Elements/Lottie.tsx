import { useEffect, useRef } from "react";

import lottie from 'lottie-web'

interface IProps {
    src: string;
}

const Lottie = (props: IProps) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animation = null;
        
        if (ref.current) {

            animation = lottie.loadAnimation({
                container: ref.current, // the dom element that will contain the animation
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/intro.json' // the path to the animation json
            });
        }
    })

    return <div ref={ref} />
}

export default Lottie;