import Slider from './Slider/Slider'
import './HomePage.css'

function HomePage()
{
    return(
        <div className='homePageContainer'>
            <Slider/>
            
            <div className='recently'>
                <h2>Gần Đây</h2>
            </div>

            <div className='forYou'>

            </div>
        </div>
    )
}

export default HomePage