import Nav from "./Nav";

import styles from 'styles/Layout.module.css';
import Footer from "./Footer";

interface IProps {
    children: any;
    className?: string;
    notPadded?: boolean;
}

const Layout = (props: IProps) => {


    return <div>
        <Nav />
        <div className={(props.notPadded ? '' : styles.MainMargin) + ' ' + props.className} >
            {props.children}
        </div>
        <Footer />
    </div>
}

export default Layout;