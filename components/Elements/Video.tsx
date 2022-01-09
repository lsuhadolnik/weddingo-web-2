interface IProps {
    src: string;
}

const Video = (props: IProps) => {


    return <video src={props.src} loop autoPlay muted />
}

export default Video;