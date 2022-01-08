import Image from "next/image";

interface IProps {
    name: string;
    width?: number;
}

const Icon = (props: IProps) => {

    const defaultWidth = 30;
    const size = props.width || defaultWidth

    return <Image src={`/images/icons/${props.name}.svg`} width={size} height={size} alt='' />
}

export default Icon;