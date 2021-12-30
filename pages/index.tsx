import CallToAction from 'components/Buttons/CallToAction'
import IntroSlide from 'components/Home/IntroSlide'
import WhySlide from 'components/Home/WhySlide'
import { ProductLoginLink } from 'content/Constants'
import { requireCollection } from 'lib/requireCollection'
import { requireSiteParts } from 'lib/requireSitePart'
import { CMSCollections } from 'lib/types'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Layout from '../components/Layout'



interface IProps {
    siteParts: {[partName: string]: string};
    collections: CMSCollections;
}

const Home: NextPage = (props: IProps) => {


    return (
        <Layout>
            <Head>
                <title>Weddingo</title>
            </Head>

            <IntroSlide siteParts={props.siteParts}/>

            <WhySlide facts={props.collections['whyFacts']} />

        </Layout>
    )
}

export default Home

export const getStaticProps = async () => {
    
    const siteParts = await requireSiteParts([
        'page-intro-title',
        'page-intro-subtitle'
    ]);

    const whyFacts = await requireCollection('whyFacts');

    return {
        props: {
            siteParts,
            collections: {
                whyFacts
            }
        }
    }
}
