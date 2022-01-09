import Layout from "components/Layout";
import MasterLoader from "components/Markdown/MasterLoader";
import Head from "next/head";

const MasterPage = (props: any) => {

    return <Layout>
        <Head>
            <title>{props.data.title ? props.data.title + ' |' : ''} | Weddingo</title>
        </Head>
        <MasterLoader markdown={props.markdown} />
    </Layout>
    
    
}

export default MasterPage;