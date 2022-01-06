interface IProps {
    aHref?: string;
    className?: string;
    children: any;
}

const CallToAction = (props: IProps) => {


    const className = "Button CallToAction select-none" + (props.className ? ' ' + props.className : '');

    if (props.aHref) {
        return <a href={props.aHref} className={className}>{props.children}</a>
    }

    else return <a className={className} href="https://footo.me/m">{props.children}</a>
}

export default CallToAction;