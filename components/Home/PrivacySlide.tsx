import ReactMarkdown from "react-markdown";
import styles from 'styles/PrivacySlide.module.css';

interface IProps {
    children: any
}

const PrivacySlide = (props: IProps) => {


    return <ReactMarkdown className={styles.PrivacySlide}>{props.children}</ReactMarkdown>
}

export default PrivacySlide;