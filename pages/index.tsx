import MasterPage from "components/Parts/MasterPage";
import loadPageMarkdown from "lib/loadPageMarkdown";


export default MasterPage;

export const getStaticProps = async () => await loadPageMarkdown({params: {pageIdx: 'index'}});
