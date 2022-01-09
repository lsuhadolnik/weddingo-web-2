interface IProps {
    children: any;
}

const Collection = (props: IProps) => {


    return <div className="lg:flex lg:justify-center">
        <div className="xl:w-full md:w-5/6 lg:flex md:flex-wrap lg:gap-5">
            {props.children}
        </div>
    </div>
}

export default Collection;