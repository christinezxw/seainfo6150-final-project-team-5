import React from 'react'
import PropTypes from 'prop-types'
import dishes from "./data/dishes.json";
import styles from './CategoryList.module.css'
import category from "./data/category.json"
import BreadCrumbNavigation from './commonComponents/BreadCrumbNavigation'

const CategoryList = () => {
    return (
        <div>
            <BreadCrumbNavigation nav={[["Home", "/"], ["Category List", "/categorylist/"]]}/>
            <section className = {styles.catesection}>
            <div className={styles.cateDiv}>
                <a href ="/category/Soup"><img className = {styles.climage} src="/images/soupDishCat.jpg" href></img></a>
            </div>
            <div className={styles.cateDiv}>
                <a href ="/category/Chrismas Recipe"><img className = {styles.climage} src="/images/ChristmasCate.jpg" href></img></a>
            </div>
            <div className={styles.cateDiv}>
                <a href ="/category/Thanksgiving Recipe"><img className = {styles.climage} src="/images/thanksgivingCate.jpg" href></img></a>
            </div>
            <div className={styles.cateDiv}>
                <a href ="/category/Dessert"><img className = {styles.climage} src="/images/DessertCate.jpg" href></img></a>
            </div>
            
            
            </section>
        
        </div>
    
        
    );
    
    
};

CategoryList.propTypes = {
    dish: PropTypes.array.isRequired
};

export default CategoryList