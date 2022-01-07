interface IProps {
    backgroundTitle: string;
    extra?: boolean
    children: any;
}

const OverweightTitle = (props: IProps) => {

    const baseOverClasses = 'top-[-10px] font-header text-right text-pale-red leading-background-huge absolute';

    const overClasses = baseOverClasses + ' ' + (props.extra ? 'text-background-extra-huge' : 'text-background-huge');

    return <div className='relative overflow-hidden'>
        <div className={overClasses}>{props.backgroundTitle}</div>
        <div className='relative pt-10 pb-8'>
            {props.children}
        </div>
    </div>;
}

export default OverweightTitle;