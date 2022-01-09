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
        <div className='fixed z-10 w-screen'>
            <div className='h-16 lg:h-24 bg-white flex justify-between items-center px-3 lg:px-8'>
                <div><Logo /></div>
                <div className='md:hidden' onClick={() => {setMenuOpen(true)}}><Icon name='menu' /></div>
                <div className='hidden md:flex md:gap-3 font-body mr-6'>
                    {NavItems.map(n => <Link key={n.link} href={n.link}>
                        <div className='hover:text-red cursor-pointer text-lg px-4'>{n.title}</div>
                    </Link>)}
                </div>
            </div>



            {/* STRIPE*/}
            <div className=' h-2 overflow-hidden'>
                <img alt='' src='/images/header-stripe.svg' height='2' />
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