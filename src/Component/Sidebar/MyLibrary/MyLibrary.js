import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './MyLibrary.css'

const myLibrary = [
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
    return(
        <div className='myLibrary'>
            <p className='title'>Thư viện</p>
            <button 
                className='editButton'
                    ><FontAwesomeIcon className='icon' icon={faCoffee} />
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
                    {myLibrary.map((item, index)=>(
                        <div className='editCheckboxItem' key={index}>
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