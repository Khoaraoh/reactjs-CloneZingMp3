import './MyButtonIcon.css'

function MyButtonIcon(props)
{
    const MyIconName = props.name;
    return(
        <button className='button'>
            <MyIconName className = {"buttonIcon " + props.className} />
        </button>
    )
}

export default MyButtonIcon