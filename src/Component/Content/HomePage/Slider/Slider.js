import { useEffect } from 'react';
import styles from './Slider.module.css';

const maxLengthSilder = 4;

function Slider()
{
    useEffect(() => {
        let slider = document.getElementsByClassName(styles.slider)[0];
        let photoSlider = document.querySelectorAll('.photo');
        console.log(slider);
        while (slider.childElementCount) {
            slider.removeChild(slider.lastChild);
        }
        slider.appendChild(photoSlider[0]);
        slider.appendChild(photoSlider[1]);
        slider.appendChild(photoSlider[2]);
        let counter = 1;
        setInterval(() => {
            while (slider.childElementCount) {
                slider.removeChild(slider.lastChild);
            }
            slider.appendChild(photoSlider[counter%4]);
            slider.appendChild(photoSlider[(counter+1)%4]);
            slider.appendChild(photoSlider[(counter+2)%4])
            counter += 1;
        }, 5000);
    }, []);

    return(
        <div className={styles.slider}>
            <img className='photo' src='https://photo-zmp3.zadn.vn/banner/e/1/2/d/e12dc11d77f46ee06c328b026cc0c4f9.jpg'></img>
            <img className='photo' src='https://photo-zmp3.zadn.vn/banner/8/a/e/d/8aedc231e3ee9875bf18c3cd7ca1fe87.jpg'></img>
            <img className='photo' src='https://photo-zmp3.zadn.vn/banner/5/7/1/d/571d34914e4d76390baabd5ff6b39f32.jpg'></img>
            <img className='photo' src='https://photo-zmp3.zmdcdn.me/banner/9/e/6/d/9e6d594ac0a6174f2508f6d38e106682.jpg'></img>
        </div>
    )
}

export default Slider