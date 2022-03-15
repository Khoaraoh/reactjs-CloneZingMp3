function MyIcon(props)
{
    const MyIconName = props.name;
    return(
        <MyIconName className = {props.className}/>
    )
}

export default MyIcon