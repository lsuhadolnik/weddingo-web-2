import Link from "next/link";

interface IProps {

}

const Logo = (props: IProps) => {


    return <Link href='/'>
        <img alt='Weddingo logo' className="select-none" src='/images/header-logo.svg' width='140' />
    </Link>;
}

export default Logo;