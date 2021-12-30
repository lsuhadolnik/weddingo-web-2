import CallToAction from 'components/Buttons/CallToAction';
import { ProductLoginLink } from 'content/Constants';
import Image from 'next/image';
import styles from 'styles/IntroSlide.module.css';

interface IProps {

}

const IntroSlide = (props: IProps) => {


    return <div className={styles.HomeWrap}>
        {/** WRAP */}
        
        <div className={styles.LeftWrap}>
            {/** LEFT */}
            <h1 className={styles.MainTitle}>
                Da bo tvoja <br/>
                poroka trajala <br/>
                dlje...
            </h1>
            
            <div className={styles.MainSubtitle}>
                Ni treba, da je tvojega najlepšega dne konec <br />
                že naslednji dan. Ohrani dobro vzdušje <br />
                še dolgo po tem.
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