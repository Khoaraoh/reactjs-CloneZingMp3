import Slider from './Slider/Slider';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import styles from './HomePage.module.css';

const forYou = [
    {
        imgSource : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/2/e/c/a/2eca0f5ff0cbfbd9c23ccdccc20359c5.jpg',
        name: 'Nhạc sĩ hát',
        professors: ['Mr. Siro', 'Vương Anh Tú', 'Tiên Cookie']
    },
    {
        imgSource : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/2/7/0/9/27094264edc913973913359541f6d314.jpg',
        name: 'Đóa hoa hồng nhạc Việt',
        professors: ['Hoàng Thùy Linh', 'MIN', 'AMEE']
    },
    {
        imgSource : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/a/f/f/7aff8fffc4505398d29315c5c2618f9b.jpg',
        name: 'Những bản nhạc hay nhất của Hoàng Rob',
        professors: ['Hoàng Rob']
    },
    {
        imgSource : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/6/b/5/c6b57f44b7066bec73f1d37721145a31.jpg',
        name: 'Hit-Maker: Khắc Hưng',
        professors: ['Khắc Hưng', 'MIN', 'Erik']
    },
    {
        imgSource : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/f/2/c/1f2cd175f5cf31b3b9b6ce102a64cc53.jpg',
        name: 'V-Pop nhạc mới nổi bật',
        professors: ['AMEE', 'Khắc Việt', 'DatKaa']
    },
]

function HomePage()
{
    return(
        <div className={styles.homePageContainer}>
            <Slider/>
            
            {/* <div className={styles.recently}>
                <h2>Gần Đây</h2>
            </div>

            <div className={styles.forYou}>
                <h2>Có Thể Bạn Muốn Nghe</h2>
                <div className={styles.forYouContent}>
                    {forYou.map((forYouItem) => (
                        <PlaylistCard
                            data = {forYouItem}
                            className = 'forYouPlaylistCard'
                        />
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default HomePage