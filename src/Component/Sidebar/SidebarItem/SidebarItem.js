import { Routes, Route } from "react-router-dom";

import MyIcon from '../../General/MyIcon'

import './SidebarItem.css'


function SidebarItem(props)
{
    const iconName = [];
    props.datas.map((data, index) =>{
        iconName[index] = data.icon;
    });
    return(
        <div className = {props.type === 'main' ? 'main-sidebar' : 'sub-sidebar'}>
            {
                props.datas.map((data, index) => (
                    <a href='#' key={data.name}>
                        <div 
                            className= {data.name === props.selectedItem ? 'sidebarItem sidebarItemSelected': 'sidebarItem'} 
                            onClick={() => props.onClick(data.name)}>
                                <MyIcon name = {iconName[index]} className='icon'/>
                                <p className='sidebaritemContent'>{data.name}</p>
                        </div> 
                    </a>
                ))
            }  
        </div>
    )
}

export default SidebarItem