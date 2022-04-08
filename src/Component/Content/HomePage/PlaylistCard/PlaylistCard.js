import styles from './PlaylistCard.module.css';

function PlaylistCard(props)
{
    return(
        <div className={props.className + ' ' + styles.playlistCard}>
            <img src={props.data.imgSource}></img>
            <p>{props.data.name}</p>
            {props.data.professors.map((professor, index)=>(
                index===(props.data.professors.length -1) ?
                <p>{professor}</p> :
                <p>{professor}, </p>
            ))}
        </div>
    )
}

export default PlaylistCard