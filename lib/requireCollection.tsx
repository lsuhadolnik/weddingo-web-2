
import loadCollectionElement from './loadCollectionElement'
import listCollectionElements from './listCollectionElements';


export const requireCollection = async (collectionName: string): Promise<Array<{content: string, data: {[key: string]: any}}>> => {

    const elements = await listCollectionElements(collectionName);

    return await Promise.all(
        elements
        .map(async (elementName: string) => 
            await loadCollectionElement(collectionName, elementName)
        )
    );

}