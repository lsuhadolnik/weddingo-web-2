import CallToAction from "components/Elements/CallToAction";
import H2 from "components/Elements/H2";
import Icon from "components/Elements/Icon";
import Logo from "components/Elements/Logo";
import Link from "next/link";

interface IProps {
    openState: [boolean, (a: boolean) => any];
    links: {title: string; link: string;}[];
    loginLink: string;
}

const NavMenu = (props: IProps) => {

    const [menuOpen, setMenuOpen] = props.openState;


    return <>
        {/* MENU */}
        <div className='fixed z-30 top-0 h-screen w-screen bg-background bg-bouquet bg-no-repeat bg-left bg-bottom'>
            <div className='h-16 bg-white flex justify-between items-center px-3'>
                <Logo />
                <div onClick={() => {setMenuOpen(false)}}><Icon name='close'/></div>
            </div>

            <a href={props.loginLink}>
                <div className='my-10'>
                    <CallToAction>Prijava</CallToAction>
                </div>
            </a>

            {props.links.map((l) => (
                <Link key={l.link} href={l.link} passHref>
                    <a onClick={() => {setMenuOpen(false)}}>
                        <H2 className='my-5'>{l.title}</H2>
                    </a>
                </Link>
            ))}
            


            <div className='w-screen h-2 overflow-hidden absolute bottom-0'>
                <img alt='' src='/images/header-stripe.svg' height='2' />
            </div>

        </div>
        {/* END MENU */}
    </>
}

export default NavMenu;