import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.pic}><img src="/images/treefrog.jpg" alt="tree frog" /></div>
            <div>{props.desc}</div>
        </div>
    )
}

export default Card
