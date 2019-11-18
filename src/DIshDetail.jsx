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
            <h1 className = {styles.h1Title}>{props.dish.name}</h1>
            <div className = {styles.image}>
                <img src={props.dish.img.url}/>
            </div>
            <div className = {styles.brief}>
                <section>
                    <h2 className = {styles.h2Title}>Summary</h2>
                    <p>{props.dish.summary}</p>
                </section>
                <section>
                    <h3 className = {styles.h3Title}>Level</h3>
                    <p>{props.dish.level}</p>
                </section>
                <section>
                    <h3 className = {styles.h3Title}>Yield</h3>
                    <p>{props.dish.yield}</p>
                </section>
            </div>
            <div className = {styles.ingredients}>
                <h2 className = {styles.h2Title}>Ingredients</h2>
                <ul className = {styles.gridsection}>
                    {props.dish.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className = {styles.directions}>
                <h2 className = {styles.h2Title}>Directions</h2>
                <ol className = {styles.gridsection}>
                    {props.dish.directions.map(direction => (
                    <li key={direction}>{direction}</li>
                    ))}
                </ol>
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
