import React from 'react'
import styles from './Footer.module.css'


const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div><a className={styles.footera} href="/aboutus">About Us</a></div>
        </div>
    )
}

export default Footer
