import Container from "components/Container";
import Header from "components/Header";
import Layout from "components/Layout";
import Head from "next/head";

import styles from 'styles/Pricing.module.css';

interface IProps {

}

const Pricing = (props: IProps) => {


    return <Layout>
        <Head>
            <title>Cenik | Weddingo</title>
        </Head>

        <Container>
            <Header>
                <div>Cenik</div>
                <div>Izberi paket, ki ustreza tebi!</div>
            </Header>
            
            <iframe src="https://footo.me/m/buy/frame" className={styles.Frame} />
        </Container>

    </Layout>
}

export default Pricing;