interface IProps {
    aHref?: string;
    className?: string;
    children: any;
}

const CallToAction = (props: IProps) => {


    const className = "Button CallToAction" + (props.className ? ' ' + props.className : '');

    if (props.aHref) {
        return <a href={props.aHref} className={className}>{props.children}</a>
    }

    else return <div className={className}>{props.children}</div>
}

export default CallToAction;