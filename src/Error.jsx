import React from 'react'
import styles from "./error.module.css"

const Error = () => {
    return (
        <div className={styles.div}>
            <header className={styles.header}>
                Oops······
            </header>
            <img className = {styles.errorimage} src="/images/errorpage.jpg"></img><br/>
            <header1 className={styles.content}>
                Looks like you've reached nowhere land!<br/>
                Better hurry back
                <a href="/"> home!</a>
            </header1>
        </div>
    )
}

export default Error
