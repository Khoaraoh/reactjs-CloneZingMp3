import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

function Header()
{
    return(
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faCoffee} />
            <FontAwesomeIcon className='icon' icon={faCoffee} />
            <div className='search'>
                <FontAwesomeIcon className='searchIcon' icon={faCoffee} />
                <input className='searchInput' placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...'></input>
                <FontAwesomeIcon className='closeIcon' icon={faCoffee} />
            </div>
            <div className='rightButton'>
                <button className='button'>
                </button>
                <button className='button'></button>
                <button className='button'></button>
                <button className='button'></button>
                <button className='button'></button>
            </div>
        </div>
    )
}

export default Header