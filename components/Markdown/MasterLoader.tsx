import BasicCard from "components/Cards/BasicCard";
import PaleCard from "components/Cards/PaleCard";
import SideImageCard from "components/Cards/SideImageCard";
import TitleCard from "components/Cards/TitleCard";
import CallToAction from "components/Elements/CallToAction";
import CardIcon from "components/Elements/CardIcon";
import Collection from "components/Elements/Collection";
import Column from "components/Elements/Column";
import Container from "components/Elements/Container";
import FullWidth from "components/Elements/FullWidth";
import H1 from "components/Elements/H1";
import H2 from "components/Elements/H2";
import Image from "components/Elements/Image";
import Lottie from "components/Elements/Lottie";
import OverweightTitle from "components/Elements/OverweightTitle";
import P from "components/Elements/P";
import Spacer from "components/Elements/Spacer";
import SpacerHalf from "components/Elements/SpacerHalf";
import Subtitle from "components/Elements/Subtitle";
import Video from "components/Elements/Video";
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
        Card: BasicCard, PaleCard,
        CallToAction: (props: any) => {
            const children = React.Children.toArray(props.children);
            return <a href='https://footo.me/m'><CallToAction className='my-8'>{children[0]}</CallToAction></a>;
        },
        Spacer, SpacerHalf,
        Image,
        FullWidth,
        Collection,
        Video: (props: DirectiveProps) => <Video src={props.node.properties.src} fallback={props.node.properties.fallback} />,
        Lottie: (props: DirectiveProps) => <Lottie src={props.children} />,
        Container: (props: DirectiveProps) => <Container columns={parseInt(props.node.properties.cols || '2', 10) || 2}>{props.children}</Container>, 
        Column: (props: DirectiveProps) => <Column className={props.node.properties.class}>{props.children}</Column>,
    };


    return <MarkdownLoader components={components}>{props.markdown}</MarkdownLoader>;
}

export default MasterLoader;