import CallToAction from 'components/Buttons/CallToAction';
import { ProductLoginLink } from 'content/Constants';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import styles from 'styles/IntroSlide.module.css';

interface IProps {
    siteParts: {[partName: string]: string}
}

const IntroSlide = (props: IProps) => {


    return <div className={styles.HomeWrap}>
        {/** WRAP */}
        
        <div className={styles.LeftWrap}>
            {/** LEFT */}
            <h1 className={styles.MainTitle}>
                <ReactMarkdown>{props.siteParts['page-intro-title']}</ReactMarkdown>
            </h1>
            
            <div className={styles.MainSubtitle}>
            <ReactMarkdown>{props.siteParts['page-intro-subtitle']}</ReactMarkdown>
            </div>

            <div className={styles.MainCTA}>
                <CallToAction  aHref={ProductLoginLink}>Ustvari svoj Weddingo</CallToAction>
            </div>
        </div>

        <div className={styles.RightWrap}>
            {/** RIGHT */}
            <Image src={'/images/front-page-right-graphics.svg'} width={821} height={831} />
        </div>
</div>
}

export default IntroSlide;