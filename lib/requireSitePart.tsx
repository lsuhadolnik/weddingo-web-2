import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'siteParts')

export const requireSiteParts = async (parts: string[]): Promise<{[partName: string]: string}> => {


    const fileNames = await fs.promises.readdir(postsDirectory);

    const data = await Promise.all(
        fileNames
            .filter((fileName: string) => parts.find((partName: string) => fileName.startsWith(partName)))
            .map(async (fileName: string) => {
                const fullPath = path.join(postsDirectory, fileName)
                const fileContents = await fs.promises.readFile(fullPath, 'utf8');

                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents);

                return [fileName.replace('.md', ''), matterResult.content as string];
            })
    );

    const obj = Object.fromEntries(data);
    return obj;

}