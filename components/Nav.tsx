import styles from 'styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {

}

const Nav = (props: IProps) => {

    const NavItems = [
        {
            title: 'Kako deluje',
            link: '/how-it-works',
        },
        {
            title: 'Najina zgodba',
            link: '/story',
        },
        {
            title: 'Cenik',
            link: '/pricing',
        }
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    return <div className={styles.HeaderWrap}>
        {/* WRAP */}
        <div>
            {/* LEFT */}
            <div className={styles.LogoWrap}>
                <Link href={'/'} passHref>
                    <Image alt={'Weddingo logo'} src={'/images/header-logo.svg'} width={187} height={47.9}/>
                </Link>
            </div>
        </div>
        <div>
            {/* RIGHT */}
            <div className={styles.OpenMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                Menu
            </div>
            <div className={[styles.MenuWrap, (menuOpen ? styles.MenuOpen : styles.MenuClosed)].join(' ')}>
                {/* MENU */}
                {NavItems.map(i => (
                    <div key={i.link} className={styles.NavLink}>
                        <Link href={i.link} passHref>{i.title}</Link>
                    </div>
                ))}
                <a className={"Button CallToAction "} href="https://footo.me/m">
                    Prijava
                </a>

                <div className={[styles.CloseMenuIcon, styles.NavLink].join(' ')} onClick={() => setMenuOpen(!menuOpen)}>
                    Zapri
                </div>
            </div>
        </div>
    </div>
}

export default Nav;