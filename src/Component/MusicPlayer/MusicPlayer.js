import { BsAppIndicator } from 'react-icons/bs';
import { HiOutlineHeart, HiHeart, HiOutlineVolumeUp, HiOutlineVolumeOff} from 'react-icons/hi';
import { MdOutlineMoreHoriz, MdOutlinePersonalVideo } from 'react-icons/md';
import { ImCross,ImLoop,ImPlay2, ImPause } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { GiMicrophone } from 'react-icons/gi';
import { BiWindows } from 'react-icons/bi';
import { RiPlayListLine } from 'react-icons/ri';
import { useState, useRef, useEffect, useCallback } from 'react';

import styles from './MusicPlayer.module.css';
import MyIcon from '../General/MyIcon';
import MyButtonIcon from '../General/MyIconButton';

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

    const [isMusicPlay, setIsMusicPlay] = useState(true);

    const [notiContent, setNotiContent] = useState(defaultNotiContent);

    const [currentTime, setCurrentTime] = useState(0);

    const [volume, setVolume] = useState(50);

    const maxTime = 242;

    const [oldVolumeValue, setOldVolumeValue] = useState(50);

    const Noti = useRef();

    useEffect(() => {
        var timerId = setInterval(() => {
            if(currentTime <= maxTime)
                {
                    setCurrentTime((prev) => prev + 1);
                }
        }, 1000);
    }, []);

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
        if(volume===0)
        {
            setVolume(oldVolumeValue);
        }
        else
        {
            setOldVolumeValue(volume);
            setVolume(0);
        }
    }

    function handleChangeTime(e)
    {
        setCurrentTime(e.target.value*maxTime/1000);
    }

    function handleChangeVolume(e)
    {
        setVolume(e.target.value);
        if(e.target.value==0)
        {
            handleSetMute();
        }
    }

    return(
        <div className={styles.musicPlayer}>
            <div className={styles.musicInfo}>
                <img className={styles.image} src='https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/b/1/1/4/b1141462092869c7c8f755e824d5d609.jpg'></img>
                
                <div className={styles.songInfo}>
                    <span className={styles.songName}>THATS WHAT I WANT</span>
                    <div>
                        <MyIcon name={BsAppIndicator} className={styles.singerIcon}/>
                        <p className={styles.singerName}>Lil Nas X</p>
                    </div>
                </div>

                <div className={styles.musicInfoIcon}>
                    {isLike ? <MyButtonIcon name={HiHeart} className={styles.icon} isSelected = {isLike} onClick = {handleLike}
                              ></MyButtonIcon>
                            : <MyButtonIcon name={HiOutlineHeart} className={styles.icon} isSelected = {isLike} onClick = {handleLike}
                            ></MyButtonIcon>}
                    <MyButtonIcon name={MdOutlineMoreHoriz} className={styles.icon}></MyButtonIcon>
                </div> 

                <div className={styles.likeNoti} ref={Noti}>
                    <p>{notiContent}</p>
                    <div onClick={handleCloseNoti} className={styles.iconNoti}>
                        <MyIcon name={ImCross}></MyIcon>
                    </div>
                </div>
            </div>

            <div className={styles.player}>
                <div className={styles.playerDashboard}>
                    <div className={styles.playerItem}>
                        <MyButtonIcon name={FaRandom} isSelected = {isRandomPlay} onClick={handleRandomPlay}/>
                    </div>
                    <div className={styles.playerItem}>
                        <MyButtonIcon name={IoMdSkipBackward}/>
                    </div>
                    <div className={`${styles.playerItem} ${styles.playButton}`} onClick={handlePlayMusic}>
                        {isMusicPlay ? <MyButtonIcon name={ImPause}/>
                                     : <MyButtonIcon name={ImPlay2}/>}
                    </div>
                    <div className={styles.playerItem}>
                        <MyButtonIcon name={IoMdSkipForward}/>
                    </div>
                    <div className={styles.playerItem}>
                    <MyButtonIcon name={ImLoop} isSelected = {isLoop} onClick={handleLoop}/>
                    </div>
                </div>

                <div className={styles.playerSlider}>
                    { Math.floor(currentTime%60)<10 
                    ? <p className={styles.timeSlider}>{Math.floor(currentTime/60)}:0{Math.floor(currentTime%60)}</p>
                    : <p className={styles.timeSlider}>{Math.floor(currentTime/60)}:{Math.floor(currentTime%60)}</p>
                    }
                    
                    <p className={styles.timeSlider}></p>
                    <input type="range" min="0" max="1000" value={(currentTime/maxTime)*1000} onChange={handleChangeTime}/>
                    { maxTime%60<10 
                    ? <p className={styles.timeSlider}>{Math.floor(maxTime/60)}:0{maxTime%60}</p>
                    : <p className={styles.timeSlider}>{Math.floor(maxTime/60)}:{maxTime%60}</p>
                    }
                    
                </div>
            </div>
            <div className={styles.moreInfo}>
                <div className={styles.moreInfoItem}>
                    <MyButtonIcon name={MdOutlinePersonalVideo}/>
                </div>
                <div className={styles.moreInfoItem}>
                    <MyButtonIcon name={GiMicrophone}/>
                </div>
                <div className={styles.moreInfoItem}>
                    <MyButtonIcon name={BiWindows}/>
                </div>
                <div className={`${styles.moreInfoItem} ${styles.soundControl}`}>
                    {volume===0 ? <MyButtonIcon name={HiOutlineVolumeOff} onClick={handleSetMute}/>
                                : <MyButtonIcon name={HiOutlineVolumeUp} onClick={handleSetMute}/>}
                    <input type="range" min="0" max="100" value={volume} onChange={handleChangeVolume}/>
                </div> 

                <div className={styles.playlistButton}>
                    <MyIcon className={styles.playlistIcon} name={RiPlayListLine}></MyIcon>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer