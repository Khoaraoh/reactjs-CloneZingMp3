import { useState, useRef } from 'react'
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdShowChart, MdOutlineFileUpload } from 'react-icons/md'
import { FcTemplate } from 'react-icons/fc'
import { RiVipDiamondLine } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'

import MyIcon from '../General/MyIcon'
import './Header.css'

function Header()
{
    const searchComponent = useRef();
    const searchActiveComponent = useRef();

    function handleSearchInput()
    {
        searchActiveComponent.current.style.display = 'inline-block';
    }
    
    // useState(() => {
    //     window.addEventListener('click', (e) => {
    //         if (searchActiveComponent.current.contains(e.target))
    //         {
    //             alert('Focus')
    //         }
    //         else
    //         {
    
    //         }
    //     });
    // }, [])

    return(
        <div className='header'>
            <div className='direction'>
                <MyIcon name={BsArrowLeft} className='icon'/>
                <MyIcon name={BsArrowRight} className='icon'/>
            </div>
            <div className='search' ref={searchComponent}>
                <MyIcon name={HiOutlineSearch} className='icon'/>
                <input 
                    onClick={handleSearchInput}
                    className='searchInput' 
                    placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'>
                </input>
            </div>
            <div className='searchActive' ref={searchActiveComponent}>
                <MyIcon name={HiOutlineSearch} className='icon'/>
                <input className='searchInput' placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'></input>
                <div className='suggestList'>
                    <p className='title'>Đề xuất cho bạn</p>
                    <div className='suggestListItem'>
                        <MyIcon className='suggestListIcon' name={MdShowChart}/>
                        <p>chạy về nơi</p>
                    </div>
                    <div className='suggestListItem'>
                        <MyIcon className='suggestListIcon' name={MdShowChart}/>
                        <p>đơn phương</p>
                    </div>
                    <div className='suggestListItem'>
                        <MyIcon className='suggestListIcon' name={MdShowChart}/>
                        <p>người yêu tôi</p>
                    </div>
                    <div className='suggestListItem'>
                        <MyIcon className='suggestListIcon' name={MdShowChart}/>
                        <p>#zingchart</p>
                    </div>
                    <div className='suggestListItem'>
                        <MyIcon className='suggestListIcon' name={MdShowChart}/>
                        <p>zing choice</p>
                    </div>
                </div>
            </div>
            <div className='rightButton'>
                <div className='rightButtonItem'>
                    <MyIcon className='buttonIcon' name={FcTemplate}/>
                    <button className='button'></button>
                </div>
                <div className='rightButtonItem'>
                    <MyIcon className='buttonIcon' name={RiVipDiamondLine}/>
                    <button className='button'></button>
                </div>
                <div className='rightButtonItem'>
                    <MyIcon className='buttonIcon' name={MdOutlineFileUpload}/>
                    <button className='button'></button>
                </div>
                <div className='rightButtonItem'>
                    <MyIcon className='buttonIcon' name={FiSettings}/>
                    <button className='button'></button>
                </div>
                <button className='button avatar'></button>
            </div>
        </div>
    )
}

export default Header