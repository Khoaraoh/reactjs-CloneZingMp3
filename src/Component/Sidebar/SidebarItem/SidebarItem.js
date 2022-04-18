import { Routes, Route } from "react-router-dom";

import MyIcon from '../../General/MyIcon';
import styles from './SidebarItem.module.css';

function SidebarItem(props)
{
    const iconName = [];
    props.datas.map((data, index) =>{
        iconName[index] = data.icon;
    });
    return(
        <div className = {props.type === 'main' ? styles.mainSidebar : styles.subSidebar}>
            {
                props.datas.map((data, index) => (
                    <a href='#' key={data.name}>
                        <div 
                            className= {data.name === props.selectedItem ? `${styles.sidebarItem} ${styles.sidebarItemSelected}`: styles.sidebarItem} 
                            onClick={() => props.onClick(data.name)}>
                                <MyIcon name = {iconName[index]} className={styles.icon}/>
                                <p className={styles.sidebaritemContent}>{data.name}</p>
                                {data.name==='Radio' && 
                                <img className={styles.sidebarItemWarn}  src='https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg'></img>
                                }
                        </div> 
                    </a>
                ))
            }  
        </div>
    )
}

export default SidebarItem