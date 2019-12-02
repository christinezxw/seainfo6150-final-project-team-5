import React from 'react'
import styles from './BreadCrumbNavigation.module.css'
import PropTypes from 'prop-types'


const BreadCrumbNavigation = (props) => {
    
    return (
        <div className={styles.breadcrumbs}>
            <a className={styles.bcA}href="/">Home</a><span className = {styles.bcspan}>&gt;</span>
            
            
        </div>
    )
}

export default BreadCrumbNavigation