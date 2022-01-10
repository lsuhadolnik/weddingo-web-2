interface IProps {

}

import MasterLoader from 'components/Markdown/MasterLoader';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import parseMarkdown from 'lib/parseMarkdown';

const CMS = dynamic(() => import('netlify-cms-app').then((cms) => {
    debugger;
    const _cms = cms as any;
    _cms.init();

    _cms.registerPreviewTemplate('pages', (props: any) => {
        const entry = props.entry.get('raw');
        const {content, data} = parseMarkdown(entry);
        return <MasterLoader markdown={content} />
    });

    return cms.NetlifyCmsApp as any;
}), {ssr: false});

interface IProps {

}

const admin = (props: IProps) => {


    return <>
        <Head>
            <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
            <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <CMS />
    </>
}

export default admin;
