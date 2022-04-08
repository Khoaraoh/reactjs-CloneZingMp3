import { useState } from 'react'

import styles from './MyLibrary.module.css'
import MyIcon from '../../General/MyIcon'
import { MdOutlineEdit } from 'react-icons/md'

const mydataLibrary = [
    {
        name: "Bài hát",
        isSelected: false,
        imgSource: 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg'
    },
    {
        name: "Playlist",
        isSelected: true,
        imgSource: 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg'
    },
    {
        name: "Album",
        isSelected: true,
        imgSource: 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-album.24e3332b.svg'
    },
    {
        name: "Nhạc tải lên",
        isSelected: true,
        imgSource: 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-album.24e3332b.svg'
    },
    {
        name: "Gần đây",
        isSelected: true,
        imgSource: 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg'
    }
]

function MyLibrary()
{
    const [myLibrary, setMyLibrary] = useState(mydataLibrary)

    function handleEditCheckbox(name)
    {
        // let newdata = myLibrary

        // for(var i=0;i<newdata.length;i++)
        // {
        //     if(newdata[i].name===name)
        //     {
        //         if(newdata[i].isSelected===true)
        //         {
        //             newdata[i].isSelected = false
        //         }
        //         else
        //         {
        //             newdata[i].isSelected = true
        //         }
        //     }
        //     return setMyLibrary(newdata)
        // }
    }

    return(
        <div className={styles.myLibrary}>
            <p className={styles.title}>Thư viện</p>
            <button 
                className={styles.editButton}
                    ><MyIcon name={MdOutlineEdit} className={styles.editIcon}/>
            </button>
            {myLibrary.map((item, index)=>(
                item.isSelected && 
                <div className={styles.myLibraryItem} key={index}>
                    <img src={item.imgSource}></img>
                    <span>{item.name}</span>
                </div>
            ))}

            {/* checkbox form */}
            <div className={styles.editCheckbox}>
                <h3>Thư Viện Cá Nhân</h3>
                <p className={styles.subtitle}>Bạn có thể tuỳ chỉnh danh sách thư viện cá nhân.</p>
                <div>
                    {myLibrary.map((item)=>(
                        <div className={styles.editCheckboxItem} key={item.name}
                            onClick={() => handleEditCheckbox(item.name)}
                        >
                            <input type={styles.checkbox} checked={item.isSelected}></input>
                            <img src={item.imgSource}></img>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.button}>
                    <button className={styles.closeButton}>ĐÓNG</button>
                    <button className={styles.submitButton}>LƯU</button>
                </div>
            </div>
        </div>
    )
}

export default MyLibrary