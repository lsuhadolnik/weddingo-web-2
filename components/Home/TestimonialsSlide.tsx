import { CMSCollection } from "lib/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import {DateTime} from 'luxon';

import styles from 'styles/Testimonials.module.css';

interface IProps {
    testimonials: CMSCollection
}

const TestimonialsSlide = (props: IProps) => {


    return <div className={styles.TestimonialsWrap}>
        <div className={styles.TestimonialsTitles}>
            <div className={styles.TestimonialsTitle}>Kaj menijo uporabniki?</div>
            <div className={styles.TestimonialsSubtitle}>Preberite, kako so Weddingo uporabile druge neveste.</div>
        </div>

        <div className={styles.TestimonialsCardsWrap}>
            {props.testimonials.map((t) => (
                <div key={t.data.title} className={styles.TestimonialsCard}>
                    <div className={styles.TestimonialsCardImage}>
                        <Image src={t.data.thumbnail} layout="fill" objectFit="cover" objectPosition="cover" />
                    </div>
                    <div className={styles.TestimonialsCardTexts}>
                        <div className={styles.TestimonialsCardTitle}>
                            {t.data.title}
                        </div>
                        <div className={styles.TestimonialsCardSubtitle}>
                            Datum poroke: {DateTime.fromISO(t.data.weddingDate).setLocale('sl').toLocaleString(DateTime.DATE_SHORT)}
                        </div>
                        <div className={styles.TestimonialsCardContent}>
                            <ReactMarkdown>{t.content}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default TestimonialsSlide;