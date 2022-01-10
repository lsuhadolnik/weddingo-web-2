interface IProps {
    src: string;
    fallback?: string;
}

const Video = (props: IProps) => {


    return <video  loop autoPlay muted >
        <source src={props.src} type='video/webm; codecs="vp9"' />
        <img src={props.fallback} />
    </video>
}

export default Video;