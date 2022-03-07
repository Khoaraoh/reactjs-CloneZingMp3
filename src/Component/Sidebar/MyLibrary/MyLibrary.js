import './MyLibrary.css'

const myLibrary = [
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
            <p>Thư viện</p>
            {myLibrary.map((item, index)=>(
                item.isSelected && 
                <div className='myLibraryItem' key={index}>
                    <img src={item.imgSource}></img>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default MyLibrary