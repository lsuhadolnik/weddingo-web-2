import Header from "./Header";

import styles from 'styles/Layout.module.css';
import Footer from "./Footer";

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {


    return <div>
        <Header />
        <div className={styles.MainMargin}>
            {props.children}
        </div>
        <Footer />
    </div>
}

export default Layout;