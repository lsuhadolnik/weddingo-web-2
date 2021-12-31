import Nav from "./Nav";

import styles from 'styles/Layout.module.css';
import Footer from "./Footer";
import { CSSProperties } from "react";

interface IProps {
    children: any;
    style?: CSSProperties;
}

const Layout = (props: IProps) => {


    return <div>
        <Nav />
        <div className={styles.MainMargin} style={props.style}>
            {props.children}
        </div>
        <Footer />
    </div>
}

export default Layout;