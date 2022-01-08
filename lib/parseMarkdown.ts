import matter from 'gray-matter'
import yaml from 'js-yaml'

const parseMarkdown = (fileContents: string): {content: string; data: {[key: string]: string | number}} => {
    // Use gray-matter to parse the post metadata section
    const {content, data} = matter(fileContents, {
        engines: {
          yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as any
        }
      });
    return {content, data};
}

export default parseMarkdown;