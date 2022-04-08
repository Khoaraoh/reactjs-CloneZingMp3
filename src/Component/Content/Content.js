import HomePage from './HomePage/HomePage'

import styles from './Content.module.css'

function Content()
{
    return(
        <div className={styles.contentContainer}>
            <HomePage/>
        </div>
    )
}

export default Content 