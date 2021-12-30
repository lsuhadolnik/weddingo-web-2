import IntroSlide from 'components/Home/IntroSlide'
import PrivacySlide from 'components/Home/PrivacySlide'
import TestimonialsSlide from 'components/Home/TestimonialsSlide'
import WhySlide from 'components/Home/WhySlide'
import { requireCollection } from 'lib/requireCollection'
import { requireSiteParts } from 'lib/requireSitePart'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'



const Home: NextPage = (props: any) => {


    return (
        <Layout>
            <Head>
                <title>Weddingo</title>
            </Head>

            <IntroSlide siteParts={props.siteParts}/>

            <WhySlide facts={props.collections['whyFacts']} />

            <TestimonialsSlide testimonials={props.collections['testimonials']} />

            <PrivacySlide >
                {props.siteParts['privacy-notice']}
            </PrivacySlide>

        </Layout>
    )
}

export default Home

export const getStaticProps = async () => {
    
    const siteParts = await requireSiteParts([
        'page-intro-title',
        'page-intro-subtitle',
        'privacy-notice'
    ]);

    const whyFacts = await requireCollection('whyFacts');
    const testimonials = await requireCollection('testimonials');

    return {
        props: {
            siteParts,
            collections: {
                whyFacts, testimonials
            }
        }
    }
}
