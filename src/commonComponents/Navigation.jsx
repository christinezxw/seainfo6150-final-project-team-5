import React from 'react'
import styles from './Navigation.module.css'


const Navigation = (props) => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.inline}><a href="/">Home</a></li>
            <li className={styles.inline}><a href="/categorylist">Category</a></li>
            <li className={styles.inline}><a href="/subscribe">Subscribe</a></li>
            <li className={styles.inline}><a href="/aboutus">About Us</a></li>
        </ul>
    )
}

export default Navigation