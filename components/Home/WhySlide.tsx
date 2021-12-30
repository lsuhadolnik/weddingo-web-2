import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from 'styles/WhySlide.module.css';

interface IProps {
    facts: any[];
}

const WhySlide = (props: IProps) => {

    const facts = props.facts;

    return <div className={styles.WhySlideWrap}>
        {/** Wrap */}

        <div className={[styles.WhySlideElement, styles.WhySlideTitleElement]
            .join(' ')} >

            {/* TITLE */}
            <div className={styles.WhySlideTitle}>
                Zakaj Weddingo?
            </div>
        </div>

        {/* THE WHY */}
        {facts.sort((f1, f2) => f1.data.order - f2.data.order)
            .map((f) => (
                <div key={f.data.title} className={[styles.WhySlideElement, styles.WhySlideFact].join(' ')}>
                    <div style={{position: 'relative', height: '80%'}}><Image alt={''} layout="fill" src={f.data.thumbnail} /></div>
                    <div className={styles.FactTextWrap}>
                        <div className={styles.FactTitle}>{f.data.title}</div>
                        <div className={styles.FactDescription}><ReactMarkdown>{f.content}</ReactMarkdown></div>
                    </div>
                </div>
            ))}
    </div>
}

export default WhySlide;

