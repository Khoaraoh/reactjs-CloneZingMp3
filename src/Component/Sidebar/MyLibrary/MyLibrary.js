import { useState } from 'react';

import styles from './MyLibrary.module.css';
import MyIcon from '../../General/MyIcon';
import { MdOutlineEdit } from 'react-icons/md';

const mydataLibrary = [
    {
        name: "Bài hát",
        isSelected: true,
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
        isSelected: false,
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

    const [isShowLibrabySelector, setIsShowLibrabySelector] = useState(false);

    const [cloneLibrary, setCloneLibrary] = useState(mydataLibrary);

    const [isShowEditButton, setIsShowEditButton] = useState(false);

    function handleShowLibrabySelector()
    {
        if(isShowLibrabySelector===true)
        {
            setIsShowLibrabySelector(false);
        }
        else
        {
            setIsShowLibrabySelector(true);
        }
    }

    function handleEditCheckbox(name)
    {
        setCloneLibrary(prev => (
            prev.map(item => {
                if(item.name === name)
                {
                    if(item.isSelected===true)
                    {
                        return {...item, isSelected: false};
                    }
                    else
                    {
                        return {...item, isSelected: true};
                    }
                }
                else
                {
                    return item;
                }
            })
        ))
    }

    function handleCloseLibrary()
    {
        setCloneLibrary(myLibrary);
        setIsShowLibrabySelector(false);
    }

    function handleSaveLibrary()
    {
        setMyLibrary(cloneLibrary);
        setIsShowLibrabySelector(false);
    }

    function handleShowEditButton()
    {
        setIsShowEditButton(true);
    }

    function handleHideEditButton()
    {
        setIsShowEditButton(false);
    }


    return(
        <div className={styles.myLibrary} onMouseEnter={handleShowEditButton} onMouseLeave={handleHideEditButton}>
            <p className={styles.title}>Thư viện</p>
            {isShowEditButton &&
            <button 
                onClick={handleShowLibrabySelector}
                className={styles.editButton}
                    ><MyIcon name={MdOutlineEdit} className={styles.editIcon}/>
            </button>
            }
            {myLibrary.map((item, index)=>(
                item.isSelected && 
                <div className={styles.myLibraryItem} key={index}>
                    <img src={item.imgSource}></img>
                    <span>{item.name}</span>
                </div>
            ))}

            {isShowLibrabySelector &&
            <div className={styles.myLibrarySelectorWrapper}>
                <div className={styles.editCheckbox}>
                <h3>Thư Viện Cá Nhân</h3>
                <p className={styles.subtitle}>Bạn có thể tuỳ chỉnh danh sách thư viện cá nhân.</p>
                <div>
                    {cloneLibrary.map((item, index)=>(
                        <div className={styles.editCheckboxItem} key={item.name}
                            onClick={() => handleEditCheckbox(item.name)}
                        >
                            <input type='checkbox' checked={item.isSelected}></input>
                            <img src={item.imgSource}></img>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.button}>
                    <button className={styles.closeButton} onClick={handleCloseLibrary}>ĐÓNG</button>
                    <button className={styles.submitButton} onClick={handleSaveLibrary}>LƯU</button>
                </div>
                </div>
            </div>
            }
        </div>
    )
}

export default MyLibrary