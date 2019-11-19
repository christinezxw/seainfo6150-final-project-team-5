import React from 'react'
import PropTypes from 'prop-types'
import styles from './DishDetail.module.css'

const DishDetail = props => {
    return <div>
        <div className = {styles.dishBody}>
            <h1 className = {styles.h1Title}>{props.dish.name}</h1>
            <div className = {styles.image} >
                <img src={props.dish.img.url}/>
            </div>
            <div className = {styles.brief,styles.bodySection}>
                <div>
                    <h2 className = {styles.h2Title}>Summary</h2>
                    <p>{props.dish.summary}</p>
                </div>
                <div>
                    <h3 className = {styles.h3Title}>Level</h3>
                    <p>{props.dish.level}</p>
                </div>
                <div>
                    <h3 className = {styles.h3Title}>Yield</h3>
                    <p>{props.dish.yield}</p>
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