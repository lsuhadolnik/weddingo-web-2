import P from 'components/Elements/P';
import Subtitle from 'components/Elements/Subtitle';
import Image from 'next/image';
import styles from 'styles/Footer.module.css'
import Logo from '../Elements/Logo';

interface IProps {

}

const Footer = (props: IProps) => {


    return <div className='mb-10 py-10 bg-white'>
        <div className='px-7 pt-7'><Logo /></div>
        <div className='pt-7'>
            <Subtitle>PRAVNE INFORMACIJE</Subtitle>
            <P>Pogoji uporabe</P>
            <P>Politika zasebnosti</P>
            <P>Plačila in vračila</P>
        </div>

        <div className='pt-7'>
            <Subtitle>KONTAKT</Subtitle>
            <P>tvojdan@weddingo.si</P>
        </div>

        <div className='pt-7'>
            <Subtitle>KONTAKT ZA PODJETJA</Subtitle>
            <P>partnerji@weddingo.si</P>
        </div>
    </div>
}

export default Footer;