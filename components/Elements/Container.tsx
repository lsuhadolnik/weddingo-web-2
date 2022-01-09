interface IProps {
    children: any;
    columns: number;
}

const Container = (props: IProps) => {

    const defaultClasses = "flex column justify-center";

    const colsClass = !props.columns || props.columns === 1 ? '' : "md:grid-cols-" + props.columns;

    return <div className={[defaultClasses].join(' ')}>
        <div className={["lg:w-5/6 md:grid", colsClass].join(' ')}>
            {props.children}
        </div>
    </div>
}

export default Container;