interface IProps {
    children: any
}

const TitleCard = (props: IProps) => {


    return <div className='py-10 bg-initial bg-no-repeat bg-left bg-cover'>
        <div className='w-full h-[100px]'>&nbsp;</div>
        {props.children}
    </div>
}

export default TitleCard;