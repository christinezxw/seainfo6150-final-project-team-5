import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.div}>
            <h1 className={styles.header}>
            ABOUT THE WEBSITE<br/>
            </h1>
            <p className={styles.text}>

                Our mission is to provide people<br/>
                a welcomed, colorful website, <br/>
                and make it useful and fully accessible.<br/><br/><br/>
            </p>

            <h1 className={styles.header}>
                WHO ARE WE?<br/>
            </h1>
            <p className={styles.text}>

                We are a group of four.<br/>
                This is the final project of the SEAINFO6150 class.<br/>
                Enjoy your journey here!<br/><br/><br/>
            </p>

            <h1 className={styles.header}>
                HOW TO CONTACT?<br/>
            </h1>
            <p className={styles.text}>

                If your have any question.<br/>
                Please feel free to contact us.<br/>
                <a href="mailto:GiveMe5Recipe@dishes.com">GiveMe5Recipe@dishes.com</a> <br/><br/><br/>
            </p>


        </div>
    )
}

export default AboutUs
