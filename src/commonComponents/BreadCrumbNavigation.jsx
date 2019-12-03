import React from 'react'
import styles from './BreadCrumbNavigation.module.css'
import PropTypes from 'prop-types'


const BreadCrumbNavigation = (props) => {
    
    return (
        <div class={styles.breadcrumbs}>
            <ul>
            {
                props.nav.map(ele => 
                    <li className={styles.element}>
                            <span className ={styles.bcspan}>&gt;</span>
                            <a className={styles.bcA}href={ele[1]}>{ele[0]}</a>
                        </li>
                    )
            }
            </ul>
        </div>
        // <div className={styles.breadcrumbs}>
        //     <a className={styles.bcA}href="/">Home</a><span className ={styles.bcspan}>&gt;</span>
        // </div>
    )
}

export default BreadCrumbNavigation