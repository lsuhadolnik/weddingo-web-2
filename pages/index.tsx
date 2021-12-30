import CallToAction from 'components/Buttons/CallToAction'
import IntroSlide from 'components/Home/IntroSlide'
import { ProductLoginLink } from 'content/Constants'
import { requireSiteParts } from 'lib/requireSitePart'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Layout from '../components/Layout'

interface IProps {
    siteParts: {[partName: string]: string}
}

const Home: NextPage = (props: IProps) => {


    return (
        <Layout>
            <Head>
                <title>Weddingo</title>
            </Head>

            <IntroSlide siteParts={props.siteParts}/>

        </Layout>
    )
}

export default Home

export const getStaticProps = async () => {
    
    const siteParts = await requireSiteParts([
        'page-intro-title',
        'page-intro-subtitle'
    ]);

    return {
        props: {
            siteParts
        }
    }
}
