import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDir = path.join(process.cwd(), 'content')

export const requireCollection = async (collectionName: string): Promise<Array<{content: string, data: {[key: string]: any}}>> => {

    const collectionDirectory = path.join(rootDir, collectionName)

    const fileNames = await fs.promises.readdir(collectionDirectory);

    const data = await Promise.all(
        fileNames.map(async (fileName: string) => {
            const fullPath = path.join(collectionDirectory, fileName)
            const fileContents = await fs.promises.readFile(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const {content, data} = matter(fileContents);
            return {content, data};
        })
    );

    return data;

}