import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.div}>
            <h1 className={styles.header}>
            About the website<br/>
            </h1>
            <p className={styles.text}>

                Our mission is to provide people<br/>
                a welcomed, colorful website of dishes <br/>
                and make it useful and fully accessible.<br/><br/><br/>
            </p>

            <h1 className={styles.header}>
                Who are we?<br/>
            </h1>
            <p className={styles.text}>

                We are a group of four.<br/>
                This is the final project of the SEAINFO6150 class.<br/>
                Enjoy your journey here!<br/><br/><br/>
            </p>

            <h1 className={styles.header}>
                How to contact?<br/>
            </h1>
            <p className={styles.text}>

                If your have any question.<br/>
                Please feel free to contact us.<br/>
                email: XXXXXXX@husky.neu.edu <br/><br/><br/>
            </p>


        </div>
    )
}

export default AboutUs
