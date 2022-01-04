import CallToAction from 'components/Buttons/CallToAction';
import Header from 'components/Header';
import Image from 'next/image';
import styles from 'styles/HowItWorksIntro.module.css';

interface IProps {
    siteParts: {[key: string]: string}
}

const HowItWorksIntro = (props: IProps) => {


    return <div className={styles.SlideWrap}>
        <div className={styles.LeftWrap}>
            
            <div className={styles.TextsWrap}>
                <div className={styles.MainTitle}>Kako deluje?</div>
                <div className={styles.Subtitle}>Weddingo je tvoja rešitev za prekratek poročni dan</div>
                
                
                <CallToAction className={styles.CTAWrap}>Preizkusi zdaj!</CallToAction>

                
                <div className={styles.Subtitle}>
                    Na tej strani lahko izveš, kako deluje.
                    Če te še karkoli zanima, pa nam napiši na tvojdan@weddingo.si
                </div>
            </div>
        </div>
        <div className={styles.RightWrap}>
            <Image alt='' src='/images/howItWorksIntroGraphics.svg' layout='fill' objectPosition={'cover'} objectFit={'cover'}/>
        </div>
    </div>
}

export default HowItWorksIntro;