import MyIcon from '../General/MyIcon'
import MyButtonIcon from '../General/MyIconButton'
import { BsAppIndicator } from 'react-icons/bs'
import { HiOutlineHeart, HiHeart} from 'react-icons/hi'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { useState, useRef } from 'react'
import './MusicPlayer.css'

const isSongLiked = true;

let defaultNotiContent;

if(isSongLiked === true)
{
    defaultNotiContent = 'Đã xóa bài hát khỏi thư viện';
}
else
{
    defaultNotiContent = 'Đã thêm bài hát vào thư viện';
}
function MusicPlayer()
{
    const [isLike, setIsLike] = useState(isSongLiked);

    const [notiContent, setNotiContent] = useState(defaultNotiContent);

    const Noti = useRef();

    function handleLike()
    {
        Noti.current.style.display = 'block';
        if(isLike)
        {
            setIsLike(false);
            setNotiContent('Đã xóa bài hát khỏi thư viện');
        }
        else
        {
            setIsLike(true);
            setNotiContent('Đã thêm bài hát vào thư viện');
        }
        const notiTimeout = setTimeout(() => {
            Noti.current.style.display = 'none';
        }, 2900);
    }

    function handleCloseNoti()
    {
        Noti.current.style.display = 'none';
    }

    return(
        <div className='musicPlayer'>
            <div className='musicInfo'>
                <img className='image' src='https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/b/1/1/4/b1141462092869c7c8f755e824d5d609.jpg'></img>
                
                <div className='songInfo'>
                    <span className='songName'>THATS WHAT I WANT</span>
                    <div>
                        <MyIcon name={BsAppIndicator} className='singerIcon'/>
                        <p className='singerName'>Lil Nas X</p>
                    </div>
                </div>

                <div className='musicInfoIcon'>
                    {isLike ? <MyButtonIcon name={HiHeart} className='icon' isSelected = {isLike} onClick = {handleLike}
                              ></MyButtonIcon>
                            : <MyButtonIcon name={HiOutlineHeart} className='icon' isSelected = {isLike} onClick = {handleLike}
                            ></MyButtonIcon>}
                    <MyButtonIcon name={MdOutlineMoreHoriz} className='icon'></MyButtonIcon>
                </div> 

                <div className='likeNoti' ref={Noti}>
                    <p>{notiContent}</p>
                    <div onClick={handleCloseNoti} className='iconNoti'>
                        <MyIcon name={ImCross}></MyIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer