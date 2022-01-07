import Link from "next/link";

interface IProps {

}

const Logo = (props: IProps) => {


    return <Link href='/'>
        <img className="select-none" src='/images/header-logo.svg' width='140' />
    </Link>;
}

export default Logo;