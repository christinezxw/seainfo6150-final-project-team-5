import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
    console.log(props)
    var link = "#"
    if (props.link) {
        link = props.link
    } 
    return (
        <div className={styles.container}>
            <a href={link}>
                <div className={styles.pic}><img src={props.imgUrl} alt={props.name} /></div>
                <div>{props.desc}</div>
            </a>
        </div>
    )
}

export default Card
