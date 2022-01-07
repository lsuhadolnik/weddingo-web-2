interface IProps {
    name: string;
    width?: number;
}

const Icon = (props: IProps) => {

    return <img src={`/images/icons/${props.name}.svg`} width={props.width || 30} alt='' />
}

export default Icon;