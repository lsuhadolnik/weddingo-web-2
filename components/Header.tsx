import styles from 'styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {

}

const Header = (props: IProps) => {

    const NavItems = [
        {
            title: 'Kako deluje',
            link: '/how-it-works',
        },
        {
            title: 'Cenik',
            link: '/pricing',
        }
    ]

    return <div className={styles.HeaderWrap}>
        {/* WRAP */}
        <div>
            {/* LEFT */}
            <div className={styles.LogoWrap}>
                <Image alt={'Weddingo logo'} src={'/images/header-logo.svg'} width={187} height={47.9}/>
            </div>
        </div>
        <div>
            {/* RIGHT */}
            <div className={styles.MenuWrap}>
                {/* MENU */}
                {NavItems.map(i => (
                    <div key={i.link} className={styles.NavLink}>
                        <Link href={i.link}>{i.title}</Link>
                    </div>
                ))}
                <a className={"Button CallToAction "} href="https://footo.me/m">
                    Prijava
                </a>
            </div>
        </div>
    </div>
}

export default Header;