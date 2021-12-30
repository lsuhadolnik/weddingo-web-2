import Image from 'next/image';
import styles from 'styles/Footer.module.css'

interface IProps {

}

const Footer = (props: IProps) => {


    return <div className={styles.FooterWrap}>
        
        <div className={styles.FooterContainer}>
        <div className={styles.FooterHR}></div>

        
            <div className={styles.FooterColumns}>
                <div className={[styles.FooterColumn, styles.LogoColumn].join(' ')}>
                    
                    <div className={styles.LogoWrap}>
                        <Image alt={'Weddingo logo'} src={'/images/header-logo.svg'} width={187} height={47.9}/>
                    </div>
                    <div className={styles.CopyrightText} >Copyright 2022</div>
                </div>

                <div className={styles.FooterColumn}></div>
                <div className={styles.FooterColumn}>
                    <div className={styles.FooterTitle}>Pravne informacije</div>
                    <div className={styles.FooterLink}>Pogoji uporabe</div>
                    <div className={styles.FooterLink}>Politika zasebnosti</div>
                    <div className={styles.FooterLink}>Plačila in vračila</div>
                </div>
                <div className={styles.FooterColumn}>
                    <div className={styles.FooterTitle}>Kontakt</div>
                    <div className={styles.FooterLink}>tvojdan@weddingo.si</div>
                    
                    <div className={styles.FooterTitle}>Kontakt za podjetja</div>
                    <div className={styles.FooterLink}>partnerji@weddingo.si</div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;