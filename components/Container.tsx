import styles from 'styles/Utils.module.css';

interface IProps {
    children: any;
}

const Container = (props: IProps) => {

    return <div className={styles.ContainerWrap}>
        <div className={styles.Container}>
            {props.children}
        </div>
    </div>
}

export default Container;