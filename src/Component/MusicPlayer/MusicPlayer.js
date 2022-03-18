import MyIcon from '../General/MyIcon'
import MyButtonIcon from '../General/MyIconButton'
import { BsAppIndicator } from 'react-icons/bs'
import { HiOutlineHeart, HiHeart} from 'react-icons/hi'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { useState } from 'react'
import './MusicPlayer.css'

const isSongLiked = false;

function MusicPlayer()
{
    const [isLike, setIsLike] = useState(isSongLiked);

    function handleLike()
    {
        if(isLike)
        {
            setIsLike(false);
        }
        else
        {
            setIsLike(true);
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

                <div className='likeNoti'>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer