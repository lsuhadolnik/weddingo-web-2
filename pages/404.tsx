import Container from "components/Container";
import Header from "components/Header";
import Layout from "components/Layout";

import bodymovin, { AnimationItem } from 'lottie-web';
import animationData from 'components/Animations/lighthouse.json';
import { useEffect, useRef } from "react";

interface IProps {

}

const ErrorPage = (props: IProps) => {

    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        let animation: AnimationItem | null = null;

        if (animationRef.current) {
            animation = bodymovin.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData,
              })
        }

        return () => {
            if (animation) { animation.destroy(); }
        }


    }, [animationRef]);

    return <Layout>
        
        <Container>

            <Header>
                <div>Napaka 404</div>
                <div>Izgleda, da ste zahtevali stran, ki ne obstaja.</div>
            </Header>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
                Verjamemo, da niste pričakovali te težave. Opravičujemo se vam za nevšečnosti. 
                Vaše vprašanje prosimo zastavite preko e-pošte tvojdan@weddingo.si
            </div>

            <div style={{width: '100%', height:'380px', background: 'white', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: 500}} ref={animationRef}></div>
            </div>


        </Container>

    </Layout>;
}

export default ErrorPage;