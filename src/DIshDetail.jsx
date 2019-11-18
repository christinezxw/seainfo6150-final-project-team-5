import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './commonComponents/Navigation'
import Footer from './commonComponents/Footer'
import styles from './DishDetail.module.css'

const DishDetail = props => {
    return <div>
        {/* <section className = {styles.navigation}>
            <Navigation navigation={Object.values(navigation)} />
        </section> */}
        <section className = {styles.dishBody}>
            <h1>{props.dish.name}</h1>
            <div className = {styles.image}>
                <img src={props.dish.img.url}/>
            </div>
            <div className = {styles.brief}>
                <section>
                    <h2>Summary</h2>
                    <p>{props.dish.summary}</p>
                </section>
                <section>
                    <h3>Level</h3>
                    <p>{props.dish.level}</p>
                </section>
                <section>
                    <h3>Yield</h3>
                    <p>{props.dish.yield}</p>
                </section>
            </div>
            <div className = {styles.ingredients}>
                <h2>Ingredients</h2>
                <div className = {styles.gridsection}>
                    {props.dish.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                    ))}
                </div>
            </div>
            <div className = {styles.directions}>
                <h2>Directions</h2>
                <div className = {styles.gridsection}>
                    {props.dish.directions.map(direction => (
                    <li key={direction}>{direction}</li>
                    ))}
                </div>
            </div>
        </section>
        {/* <section className = {styles.footer}>
            <Footer footer={Object.values(footer)} />
        </section> */}
    </div>
}
DishDetail.propTypes = {
    dish: PropTypes.object.isRequired
  };
export default DishDetail
