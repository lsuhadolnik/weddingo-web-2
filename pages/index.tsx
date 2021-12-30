import CallToAction from 'components/Buttons/CallToAction'
import IntroSlide from 'components/Home/IntroSlide'
import { ProductLoginLink } from 'content/Constants'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Layout from '../components/Layout'


const Home: NextPage = () => {


    return (
        <Layout>
            <Head>
                <title>Weddingo</title>
            </Head>

            <IntroSlide />

        </Layout>
    )
}

export default Home
