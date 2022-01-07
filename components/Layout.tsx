import Nav from "./Parts/Nav";

import styles from 'styles/Layout.module.css';
import Footer from "./Parts/Footer";

interface IProps {
    children: any;
    className?: string;
    notPadded?: boolean;
}

const Layout = (props: IProps) => {


    return <div>
        <Nav />
        <div>
            {props.children}
        </div>
        <Footer />
    </div>
}

export default Layout;