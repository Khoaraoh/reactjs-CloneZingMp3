import { useState } from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'

function Sidebar()
{
    const sidebarData = [
        {
            icon: "fa-solid fa-user-music",
            name: "Cá Nhân"
        },
        {
            icon: "fa-solid fa-user-music",
            name: "Khám Phá"
        },
        {
            icon: "fa-solid fa-user-music",
            name: "#zingchart"
        },
        {
            icon: "fa-solid fa-user-music",
            name: "Radio"
        },
        {
            icon: "fa-solid fa-user-music",
            name: "Theo Dõi"
        }
    ]

    const [selectedItem, setSelectedItem] = useState('Khám Phá')

    function handleSelectItem(item)
    {
        setSelectedItem(item)
    }
    return(
        <div className='sidebar'>
            <img className='logo' src='https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'></img>
            <SidebarItem
                datas = {sidebarData}
                onClick ={handleSelectItem}
                selectedItem = {selectedItem}
            ></SidebarItem>
        </div>
    )
}

export default Sidebar