interface IProps {
    className?: string;
    children: any;
}

const H1 = (props: IProps) => {

    const defaultClasses = "px-7 text-5xl font-header subpixel-antialiased "
    + " after:content-[''] after:h-[3px] after:w-[30px] after:my-10 after:block after:bg-black "
    + " lg:text-7xl";

    return <h1 className={[defaultClasses, props.className].join(' ')}>{props.children}</h1>
}

export default H1;