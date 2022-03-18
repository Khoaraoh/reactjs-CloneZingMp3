import './MyButtonIcon.css'

function MyButtonIcon(props)
{
    const MyIconName = props.name;
    return(
        <button className='button' onClick = {props.onClick}>
            {props.isSelected ? <MyIconName className = {"buttonIconSelected " + props.className}/> 
                              : <MyIconName className = {"buttonIcon " + props.className} />}
        </button>
    )
}

export default MyButtonIcon