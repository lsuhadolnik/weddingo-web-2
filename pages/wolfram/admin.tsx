interface IProps {

}

import MasterLoader from 'components/Markdown/MasterLoader';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const CMS = dynamic(() => import('netlify-cms-app').then((cms) => {
    debugger;
    (cms as any).init();

    return cms.NetlifyCmsApp as any;
}), {ssr: false});


export default CMS;