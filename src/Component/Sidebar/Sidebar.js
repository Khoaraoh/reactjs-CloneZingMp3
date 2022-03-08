import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'
import MyLibrary from './MyLibrary/MyLibrary'

const mainsidebarData = [
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

const subsidebarData = [
    {
        icon: "fa-solid fa-user-music",
        name: "Nhạc Mới"
    },
    {
        icon: "fa-solid fa-user-music",
        name: "Thể Loại"
    },
    {
        icon: "fa-solid fa-user-music",
        name: "Top 100"
    },
    {
        icon: "fa-solid fa-user-music",
        name: "MV"
    }
]

function Sidebar()
{
    const [selectedItem, setSelectedItem] = useState('Khám Phá')

    function handleSelectItem(item)
    {
        setSelectedItem(item)
    }
    return(
        <div className='sidebar'>
            <img className='logo' src='https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'></img>
            
            <SidebarItem
                datas = {mainsidebarData}
                onClick ={handleSelectItem}
                selectedItem = {selectedItem}
                type = "main"
            ></SidebarItem>
            
            <div className='divide'></div>
            
            <SidebarItem
                datas = {subsidebarData}
                onClick ={handleSelectItem}
                selectedItem = {selectedItem}
                type = "sub"
            ></SidebarItem>

            <div className='vipUpgrade'>
                <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                <button className='vipUpgradeButton'>Nâng cấp VIP</button>
            </div>

            <MyLibrary/>

            <div className='addPlaylist'>
                <FontAwesomeIcon className='icon' icon={faCoffee} />
                <span className='title'>Tạo playlist mới</span>
            </div>
        </div>
    )
}

export default Sidebar