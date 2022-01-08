import fs from 'fs'
import path from 'path'

const listCollectionElements = async (collectionName: string) => {
    
    const rootDir = path.join(process.cwd(), 'content');
    const collectionDirectory = path.join(rootDir, collectionName);
    const fileNames = await fs.promises.readdir(collectionDirectory);

    return fileNames.map(fn => fn.replace('.md', ''));

}

export default listCollectionElements;