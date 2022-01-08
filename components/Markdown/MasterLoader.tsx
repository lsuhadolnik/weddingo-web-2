import BasicCard from "components/Cards/BasicCard";
import TitleCard from "components/Cards/TitleCard";
import CallToAction from "components/Elements/CallToAction";
import CardIcon from "components/Elements/CardIcon";
import H1 from "components/Elements/H1";
import H2 from "components/Elements/H2";
import Image from "components/Elements/Image";
import OverweightTitle from "components/Elements/OverweightTitle";
import P from "components/Elements/P";
import Spacer from "components/Elements/Spacer";
import Subtitle from "components/Elements/Subtitle";
import React from "react";
import MarkdownLoader from "./MarkdownLoader";

interface IProps {
    markdown: string,
    // siteSettings: {[name: string]}
}

interface DirectiveNode {
    type: 'containerDirective' | 'leafDirective' | 'textDirective',
    tagName: string;
    properties: {[key: string]: string}
}

interface DirectiveProps {
    children: any;
    node: DirectiveNode;
}

const MasterLoader = (props: IProps) => {

    const components = {
        h1: H1,
        h2: H2,
        h3: (props: DirectiveProps) => {
            const firstChild = React.Children.toArray(props.children)[0] as string;
            return <OverweightTitle backgroundTitle={firstChild}>
                <H2>{firstChild}</H2>
            </OverweightTitle>
        },
        h4: Subtitle,
        p: P,
        TitleCard: (props: DirectiveProps) => {
            return <TitleCard className={props.node.properties.class}>{props.children}</TitleCard>
        },
        CardIcon: (props: any) => <CardIcon icon={React.Children.toArray(props.children)[0] as string} />,
        Card: BasicCard,
        CallToAction: (props: any) => {
            const children = React.Children.toArray(props.children);
            return <a href='https://footo.me/m'><CallToAction className='my-8'>{children[0]}</CallToAction></a>;
        },
        Spacer,
        Image,
    };


    return <MarkdownLoader components={components}>{props.markdown}</MarkdownLoader>;
}

export default MasterLoader;