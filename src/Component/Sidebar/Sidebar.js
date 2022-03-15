import { useState } from 'react'
import { MdMusicVideo, MdMultilineChart, MdOutlineRadio, MdOutlineFeed, 
         MdStarOutline, MdOutlineVideoStable, MdOutlineEdit} from 'react-icons/md'
import { BiDisc, BiCategoryAlt, BiPlus } from 'react-icons/bi'
import { FiMusic } from 'react-icons/fi'

import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'
import MyLibrary from './MyLibrary/MyLibrary'
import MyIcon from '../General/MyIcon'

const mainsidebarData = [
    {
        icon: MdMusicVideo,
        name: "Cá Nhân"
    },
    {
        icon: BiDisc,
        name: "Khám Phá"
    },
    {
        icon: MdMultilineChart,
        name: "#zingchart"
    },
    {
        icon: MdOutlineRadio,
        name: "Radio"
    },
    {
        icon: MdOutlineFeed,
        name: "Theo Dõi"
    }
]

const subsidebarData = [
    {
        icon: FiMusic,
        name: "Nhạc Mới"
    },
    {
        icon: BiCategoryAlt,
        name: "Thể Loại"
    },
    {
        icon: MdStarOutline,
        name: "Top 100"
    },
    {
        icon: MdOutlineVideoStable,
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
                <MyIcon name={BiPlus} className='icon'/>
                <span className='title'>Tạo playlist mới</span>
            </div>
        </div>
    )
}

export default Sidebar