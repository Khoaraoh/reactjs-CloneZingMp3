import styles from './MyButtonIcon.module.css';

function MyButtonIcon(props)
{
    const MyIconName = props.name;
    return(
        <button className={styles.button} onClick = {props.onClick}>
            {props.isSelected ? <MyIconName className = {`${styles.buttonIconSelected} ${props.className}`}/> 
                              : <MyIconName className = {`${styles.buttonIcon} ${props.className}`} />}
        </button>
    )
}

export default MyButtonIcon