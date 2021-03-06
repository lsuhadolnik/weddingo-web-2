import loadCollectionElement from './loadCollectionElement';

const loadPageMarkdown = async ({ params: { pageIdx } }: {params: {pageIdx: string;};}) => {

    const k = await loadCollectionElement('pages', pageIdx);

    return {
        props: { 
            markdown: k.content,
            data: k.data,
        }
    };

};

export default loadPageMarkdown