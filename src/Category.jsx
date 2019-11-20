import React from 'react'
import PropTypes from 'prop-types'
import styles from './Category.module.css'

const Category = props => {
    return <div>
        
        <section className = {styles.category}>
            
            <div>
                <img className = {styles.cateimage} src={props.dish.img.url}/>
                <a className = {styles.catea} href={"/detail/" +props.dish.id}><h1 className = {styles.dishTitle}>{props.dish.name}</h1></a>
            </div>
            <div className = {styles.summaryDiv}>
                
                <h2 className = {styles.summaryTitle}>Summary</h2>
                <p className={styles.summaryP}>{props.dish.summary}</p>
            </div>
            
            
        </section>

        
        
    </div>
}
Category.propTypes = {
    dish: PropTypes.object.isRequired
};
export default Category