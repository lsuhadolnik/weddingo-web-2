import Header from "./Header";

import styles from 'styles/Layout.module.css';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {


    return <div>
        <Header />
        <div className={styles.MainMargin}>
            {props.children}
        </div>
    </div>
}

export default Layout;