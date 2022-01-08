import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import {visit} from "unist-util-visit";

const reactMarkdownRemarkDirective = () => {
  return (tree: any) => {
    // debugger;
    visit(
      tree,
      ["textDirective", "leafDirective", "containerDirective"],
      (node) => {
        node.data = {
          hName: node.name,
          hProperties: node.attributes,
          ...node.data
        };
        return node;
      }
    );
  };
}

function MyDirective(data: any) {
  return (
    <span className="doSomethingCustom" >HIJAA!</span>
  );
}

interface IProps {
    components?: {[name: string]: any};
    children: any;
}

const MarkdownLoader = (props: IProps) => {
  return <ReactMarkdown remarkPlugins={[directive, reactMarkdownRemarkDirective]}
    components={{ MyDirective, ...props.components } as any}
    >
        {props.children}
    </ReactMarkdown>;
}

export default MarkdownLoader;