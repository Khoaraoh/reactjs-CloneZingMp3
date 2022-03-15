import { useState } from 'react'

import './MyLibrary.css'
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

    console.log('re-render')
    return(
        <div className='myLibrary'>
            <p className='title'>Thư viện</p>
            <button 
                className='editButton'
                    ><MyIcon name={MdOutlineEdit} className='icon'/>
            </button>
            {myLibrary.map((item, index)=>(
                item.isSelected && 
                <div className='myLibraryItem' key={index}>
                    <img src={item.imgSource}></img>
                    <span>{item.name}</span>
                </div>
            ))}

            {/* checkbox form */}
            <div className='editCheckbox'>
                <h3>Thư Viện Cá Nhân</h3>
                <p className='subtitle'>Bạn có thể tuỳ chỉnh danh sách thư viện cá nhân.</p>
                <div>
                    {myLibrary.map((item)=>(
                        <div className='editCheckboxItem' key={item.name}
                            onClick={() => handleEditCheckbox(item.name)}
                        >
                            <input type='checkbox' checked={item.isSelected}></input>
                            <img src={item.imgSource}></img>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className='button'>
                    <button className='closeButton'>ĐÓNG</button>
                    <button className='submitButton'>LƯU</button>
                </div>
            </div>
        </div>
    )
}

export default MyLibrary