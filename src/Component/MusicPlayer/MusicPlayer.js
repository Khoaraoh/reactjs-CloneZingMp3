import './MusicPlayer.css'
import MyIcon from '../General/MyIcon'
import MyButtonIcon from '../General/MyIconButton'
import { BsAppIndicator } from 'react-icons/bs'
import { HiOutlineHeart } from 'react-icons/hi'

function MusicPlayer()
{
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
                    <MyButtonIcon name={HiOutlineHeart} className='icon'></MyButtonIcon>
            </div>
        </div>
    )
}

export default MusicPlayer