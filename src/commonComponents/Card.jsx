import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.pic}><img src={props.imgUrl} alt={props.name} /></div>
            <div>{props.desc}</div>
        </div>
    )
}

export default Card
