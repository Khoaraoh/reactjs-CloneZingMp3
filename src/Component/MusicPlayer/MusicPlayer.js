import MyIcon from '../General/MyIcon'
import MyButtonIcon from '../General/MyIconButton'
import { BsAppIndicator } from 'react-icons/bs'
import { HiOutlineHeart, HiHeart, HiOutlineVolumeUp, HiOutlineVolumeOff} from 'react-icons/hi'
import { MdOutlineMoreHoriz, MdOutlinePersonalVideo } from 'react-icons/md'
import { ImCross,ImLoop,ImPlay2, ImPause } from 'react-icons/im'
import { FaRandom } from 'react-icons/fa'
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io"
import { GiMicrophone } from 'react-icons/gi'
import { BiWindows } from 'react-icons/bi'
import { RiPlayListLine } from 'react-icons/ri'
import { useState, useRef } from 'react'
import './MusicPlayer.css'

const isSongLiked = false;

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

    const [isRandomPlay, setIsRandomPlay] = useState(false);

    const [isLoop, setIsLoop] = useState(false);

    const [isMusicPlay, setIsMusicPlay] = useState(false);

    const [notiContent, setNotiContent] = useState(defaultNotiContent);

    const [isMuted, setIsMuted] = useState(true);

    const currentVolumeValue = useRef();

    const Noti = useRef();

    function handleLike()
    {
        if(Noti.current.style.display === 'block')
        {
            Noti.current.style.display = 'none';
            setTimeout(() => {
                Noti.current.style.display = 'block';
            }, 10)
        }
        else
        {
            Noti.current.style.display = 'block';
            const notiTimeout = setTimeout(() => {
                Noti.current.style.display = 'none';
            }, 2900);
            
        }
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

    function handleRandomPlay()
    {
        if(isRandomPlay===true)
        {
            setIsRandomPlay(false);
        }
        else
        {
            setIsRandomPlay(true);
        }
    }

    function handleLoop()
    {
        if(isLoop===true)
        {
            setIsLoop(false);
        }
        else
        {
            setIsLoop(true);
        }
    }

    function handlePlayMusic()
    {
        if(isMusicPlay===true)
        {
            setIsMusicPlay(false);
        }
        else
        {
            setIsMusicPlay(true);
        }
    }

    function handleSetMute()
    {
        if(isMuted===true)
        {
            setIsMuted(false);
        }
        else
        {
            setIsMuted(true);
        }
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

            <div className='player'>
                <div className='playerDashboard'>
                    <div className='playerItem'>
                        <MyButtonIcon name={FaRandom} isSelected = {isRandomPlay} onClick={handleRandomPlay}/>
                    </div>
                    <div className='playerItem'>
                        <MyButtonIcon name={IoMdSkipBackward}/>
                    </div>
                    <div className='playerItem playButton' onClick={handlePlayMusic}>
                        {isMusicPlay ? <MyButtonIcon name={ImPlay2}/>
                                     : <MyButtonIcon name={ImPause}/>}
                    </div>
                    <div className='playerItem'>
                        <MyButtonIcon name={IoMdSkipForward}/>
                    </div>
                    <div className='playerItem'>
                    <MyButtonIcon name={ImLoop} isSelected = {isLoop} onClick={handleLoop}/>
                    </div>
                </div>

                <div className='playerSlider'>
                    <p className='timeSlider'>0:00</p>
                    <input type="range" min="1" max="100"/>
                    <p className='timeSlider'>3:12</p>
                </div>
            </div>
            <div className='moreInfo'>
                <div className='moreInfoItem'>
                    <MyButtonIcon name={MdOutlinePersonalVideo}/>
                </div>
                <div className='moreInfoItem'>
                    <MyButtonIcon name={GiMicrophone}/>
                </div>
                <div className='moreInfoItem'>
                    <MyButtonIcon name={BiWindows}/>
                </div>
                {isMuted ? <div className='moreInfoItem soundControl'>
                                <MyButtonIcon name={HiOutlineVolumeUp} onClick={handleSetMute}/>
                                <input type="range" min="1" max="100"/>
                            </div> 
                         : <div className='moreInfoItem soundControl'>
                                <MyButtonIcon name={HiOutlineVolumeOff} onClick={handleSetMute}/>
                                <input type="range" min="1" max="100" value="0"/>
                            </div>}
                

                <div className='playlistButton'>
                    <MyIcon className='playlistIcon' name={RiPlayListLine}></MyIcon>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer