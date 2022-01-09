import React from 'react';
import styles from 'styles/Utils.module.css';

interface IProps {
    children: any;
}

const Header = (props: IProps) => {

    const [first, second] = React.Children.toArray(props.children);

    return <div className={styles.HeaderWrap}>
        <h1 className={styles.Header}>{first}</h1>
        <div className={styles.SubHeader}>{second}</div>
    </div>
}

export default Header;