interface IProps {
    aHref?: string;
    className?: string;
    children: any;
}

const CallToAction = (props: IProps) => {


    const defaultClasses = "w-11/12 font-body text-xl bg-red text-white m-auto text-center p-3 rounded-md "
    + " hover:bg-text hover:text-white";

    return <div className={[defaultClasses, props.className].join(' ')}>
        {props.children}
    </div>
}

export default CallToAction;