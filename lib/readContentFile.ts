const path = require('path');
const fs = require('fs');

const readContentFile = async (collection: string, element: string) => {
    

    const fullPath = path.join(process.cwd(), 'content', collection, element + '.md');
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');

    return fileContents;
}

export default readContentFile;