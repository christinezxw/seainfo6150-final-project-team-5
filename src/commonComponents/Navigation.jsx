import React from 'react'
import styles from './Navigation.module.css'


const Navigation = (props) => {
    return (
        <section>
            <h1 className = {styles.navih1} align="center">Give me 5 Recipe</h1>
            <ul className={styles.navigation}>
            <li className={styles.inline}><a className={styles.navia}href="/">Home</a></li>
            <li className={styles.inline}><a className={styles.navia}href="/categorylist">Category</a></li>
            <li className={styles.inline}><a className={styles.navia}href="/subscribe">Subscribe</a></li>
            <li className={styles.inline}><a className={styles.navia}href="/aboutus">About Us</a></li>
            </ul>

        </section>
        
    )
}

export default Navigation