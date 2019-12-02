import React from 'react'
import styles from './Footer.module.css'


const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <span className = {styles.cr}>Copyright © 2019 GiveMe5Recipe</span>
            <span className = {styles.au}><a className={styles.footera} href="/aboutus">About Us</a></span>
        </div>
    )
}

export default Footer
