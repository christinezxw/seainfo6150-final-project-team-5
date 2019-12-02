import React from 'react'
import PropTypes from 'prop-types'
import dishes from "./data/dishes.json";
import styles from './CategoryList.module.css'

const CategoryList = () => {
    return (
    
        <section className = {styles.catesection}>
            <div className={styles.cateDiv}>
                <a className = {styles.cla} href="/category/soup"><h1 className = {styles.h1Title} href>Soup</h1></a>
                <img className = {styles.climage} src="/images/MinestroneSoup.jpg"></img>
                
            </div>
            <div className={styles.cateDiv}>
                <a className = {styles.cla} href="/category/Chrismas Recipe"><h1 className = {styles.h1Title} href>Christmas</h1></a>
                <img className = {styles.climage} src="/images/GiganticStandingSnowman.jpg"></img>
            </div>
            <div className={styles.cateDiv}>
                <a className = {styles.cla} href="/category/thanksgiving recipe"><h1 className = {styles.h1Title}>Thanksgiving</h1></a>
                <img className = {styles.climage} src="/images/thanksgiving.jpg"></img>
            </div>
            <div className={styles.cateDiv}>
                <a className = {styles.cla} href="/category/Dessert"><h1 className = {styles.h1Title}>Dessert</h1></a>
                <img className = {styles.climage1} src="/images/QuickandEasyAppleTart.jpg"></img>
            </div>
            
            
        </section>
    );
    
    
};

CategoryList.propTypes = {
    dish: PropTypes.array.isRequired
};

export default CategoryList