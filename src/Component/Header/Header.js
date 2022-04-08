import { useState, useRef } from 'react';
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdShowChart, MdOutlineFileUpload } from 'react-icons/md';
import { FcTemplate } from 'react-icons/fc';
import { RiVipDiamondLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';

import MyIcon from '../General/MyIcon';
import styles from './Header.module.css';

function Header()
{
    const searchComponent = useRef();
    const searchActiveComponent = useRef();

    function handleSearchInput()
    {
        searchActiveComponent.current.style.display = 'inline-block';
    }

    function handleOnBlurSearchInput()
    {
        searchActiveComponent.current.style.display = 'none';
    }
    
    return(
        <div className={styles.header}>
            <div className={styles.direction}>
                <MyIcon name={BsArrowLeft} className={styles.icon}/>
                <MyIcon name={BsArrowRight} className={styles.icon}/>
            </div>
            <div className={styles.search} ref={searchComponent}>
                <MyIcon name={HiOutlineSearch} className={styles.icon}/>
                <input 
                    onClick={handleSearchInput}
                    onBlur={handleOnBlurSearchInput}
                    className={styles.searchInput} 
                    placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'>
                </input>
            </div>
            <div className={styles.searchActive} ref={searchActiveComponent}>
                <MyIcon name={HiOutlineSearch} className={styles.icon}/>
                <input className={styles.searchInput} placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'></input>
                <div className={styles.suggestList}>
                    <p className={styles.title}>Đề xuất cho bạn</p>
                    <div className={styles.suggestListItem}>
                        <MyIcon className={styles.suggestListIcon} name={MdShowChart}/>
                        <p>chạy về nơi</p>
                    </div>
                    <div className={styles.suggestListItem}>
                        <MyIcon className={styles.suggestListIcon} name={MdShowChart}/>
                        <p>đơn phương</p>
                    </div>
                    <div className={styles.suggestListItem}>
                        <MyIcon className={styles.suggestListIcon} name={MdShowChart}/>
                        <p>người yêu tôi</p>
                    </div>
                    <div className={styles.suggestListItem}>
                        <MyIcon className={styles.suggestListIcon} name={MdShowChart}/>
                        <p>#zingchart</p>
                    </div>
                    <div className={styles.suggestListItem}>
                        <MyIcon className={styles.suggestListIcon} name={MdShowChart}/>
                        <p>zing choice</p>
                    </div>
                </div>
            </div>
            <div className={styles.rightButton}>
                <div className={styles.rightButtonItem}>
                    <MyIcon className={styles.buttonIcon} name={FcTemplate}/>
                    <button className={styles.button}></button>
                </div>
                <div className={styles.rightButtonItem}>
                    <MyIcon className={styles.buttonIcon} name={RiVipDiamondLine}/>
                    <button className={styles.button}></button>
                </div>
                <div className={styles.rightButtonItem}>
                    <MyIcon className={styles.buttonIcon} name={MdOutlineFileUpload}/>
                    <button className={styles.button}></button>
                </div>
                <div className={styles.rightButtonItem}>
                    <MyIcon className={styles.buttonIcon} name={FiSettings}/>
                    <button className={styles.button}></button>
                </div>
                <button className={`${styles.button} ${styles.avatar}`}></button>
            </div>
        </div>
    )
}

export default Header