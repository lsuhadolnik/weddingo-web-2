import styles from 'styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icon from 'components/Elements/Icon';
import NavMenu from './NavMenu';
import Logo from '../Elements/Logo';

interface IProps {

}

const Nav = (props: IProps) => {

    const NavItems = [
        {
            title: 'Prva stran',
            link: '/',
        },
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
        },
    ]

    const openState = useState(false);
    const [menuOpen, setMenuOpen] = openState;

    return <>
        {/* HEADER */}
        <div className='fixed z-10'>
            <div className='h-16 bg-white flex justify-between items-center px-3'>
                <div><Logo /></div>
                <div onClick={() => {setMenuOpen(true)}}><Icon name='menu' /></div>
            </div>
            <div className='w-screen h-2 overflow-hidden'>
                <img src='/images/header-stripe.svg' height='2' />
            </div>
        </div>
        <div className='h-16' >&nbsp;</div>
        {/* END HEADER */}

        {menuOpen && <NavMenu 
            openState={openState} 
            links={NavItems}
            loginLink={'https://footo.me/m'} />}
    </>
}

export default Nav;