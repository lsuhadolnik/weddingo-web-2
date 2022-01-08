import Layout from "components/Layout";
import MasterLoader from "components/Markdown/MasterLoader";

const MasterPage = (props: any) => {

    return <Layout>
        <MasterLoader markdown={props.markdown} />
    </Layout>
    
    
}

export default MasterPage;