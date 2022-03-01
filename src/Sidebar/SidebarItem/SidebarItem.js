import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useEffect} from 'react'
import './SidebarItem.css'


function SidebarItem(props)
{
    useEffect(() => {
        
    }, [])

    return(
        <div>
            {
                props.datas.map(data => (
                    <a href='#' key={data.name}>
                        {console.log()}
                        <div 
                            className= {data.name === props.selectedItem ? 'sidebarItem sidebarItemSelected': 'sidebarItem'} 
                            onClick={() => props.onClick(data.name)}>
                                <FontAwesomeIcon className='icon' icon={faCoffee} />
                                <p className='sidebaritemContent'>{data.name}</p>
                        </div> 
                    </a>
                ))
            }
            
        </div>
    )
}

export default SidebarItem