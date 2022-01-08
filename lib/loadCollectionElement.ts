import parseMarkdown from "./parseMarkdown";
import readContentFile from "./readContentFile"

const loadCollectionElement = async (collection: string, elementName: string) => {
    
    const fileContents = await readContentFile(collection, elementName);
    return parseMarkdown(fileContents);
}

export default loadCollectionElement;