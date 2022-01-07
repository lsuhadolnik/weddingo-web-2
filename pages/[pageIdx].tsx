import CallToAction from "components/Elements/CallToAction";
import H1 from "components/Elements/H1";
import H2 from "components/Elements/H2";
import P from "components/Elements/P";
import TitleCard from "components/Cards/TitleCard";
import Layout from "components/Layout";
import MarkdownLoader from "components/Markdown/MarkdownLoader";


const MasterPage = (props: any) => {

    return <Layout>
        <MarkdownLoader
                components={{
                    h1: H1,
                    h2: H2,
                    p: P,
                    TitleCard,
                    CallToAction: (props: any) => <CallToAction className='my-8'>Pripravi svoj Weddingo zdaj</CallToAction>
                }}
            >{
            props.md
        }</MarkdownLoader>
    </Layout>
    
    
}

export default MasterPage;

export const getStaticPaths = async () => {
    const path = require('path');
    const fs = require('fs');

    const theDir = path.join(path.join(process.cwd(), 'content'), 'pages');
    const fileNames = await fs.promises.readdir(theDir);

    const paths = fileNames.map((fn: string) => {
        return {
            params: {
                pageIdx: fn.split('.')[0]
            }
        }
    });
    console.log(paths);

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({ params }: any) => {
    const {pageIdx} = params;

    const path = require('path');
    const fs = require('fs');

    const fullPath = path.join(process.cwd(), 'content', 'pages', pageIdx + '.md');
    const md = await fs.promises.readFile(fullPath, 'utf8');

    return {
        props: {
            md
        }
    };
}
