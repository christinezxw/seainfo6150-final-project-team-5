import React from 'react'
import PropTypes from 'prop-types'
import styles from './DishDetail.module.css'
import BreadCrumbNavigation from './commonComponents/BreadCrumbNavigation'

const DishDetail = props => {
    return <div>
        <BreadCrumbNavigation nav={[["Home", "/"], ["Category", "/category/" + props.dish.category], [props.dish.name, "/detail/" + props.dish.id]]}/>
        <div className = {styles.dishBody}>
            <div className = {styles.parContent}>
                <h1 className = {styles.h1Title}>{props.dish.name}</h1>
                <div className = {styles.image} >
                    <img src={props.dish.img.url}/>
                </div>
                <div className = {styles.brief}>
                    <div>
                        <h2 className = {styles.h2Title}>Summary</h2>
                        <p>{props.dish.summary}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Category</h3>
                        <p>{props.dish.category}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Level</h3>
                        <p>{props.dish.level}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Total Time</h3>
                        <p>{props.dish.totaltime}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Yield</h3>
                        <p>{props.dish.yield}</p>
                    </div>
                </div>
            </div>
            <div className = {styles.ingredients,styles.bodySection}>
                <h2 className = {styles.h2Title}>Ingredients</h2>
                <ul className = {styles.griddiv}>
                    {props.dish.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className = {styles.directions,styles.bodySection}>
                <h2 className = {styles.h2Title}>Directions</h2>
                <ol className = {styles.griddiv}>
                    {props.dish.directions.map(direction => (
                    <li key={direction}>{direction}</li>
                    ))}
                </ol>
            </div>
        </div>
    </div>
}
DishDetail.propTypes = {
    dish: PropTypes.object.isRequired
  };
export default DishDetail
