import MasterPage from "components/Parts/MasterPage";
import listCollectionElements from "lib/listCollectionElements";
import loadPageMarkdown from "lib/loadPageMarkdown";


export default MasterPage;

export const getStaticProps = loadPageMarkdown;

export const getStaticPaths = async () => {
    
    const pages = await (await listCollectionElements('pages')).filter(a => a !== 'index');

    const paths = pages.map((p) => {
        return {
            params: {
                pageIdx: p
            }
        }
    });

    return {
        paths,
        fallback: false
    }
};
