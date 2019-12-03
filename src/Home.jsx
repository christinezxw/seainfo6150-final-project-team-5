import React, { Component } from "react";
import styles from './Home.module.css'
import Card from './commonComponents/Card'
import dishes from "./data/dishes.json"
import category from "./data/category.json"



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.reRender.bind(this)
        this.state = {
            width: document.body.clientWidth
        };
    }

    componentDidMount() {
        this.screenChange();
    }
  
    componentWillUnmount() {
        window.removeEventListener('resize',this.reRender);

    }

    screenChange() {
        window.addEventListener('resize', this.reRender);
    }

    render() {
        if (this.state.width < 500) {
            return (
            <div className={styles.homeh1}>
                {
                    category.map(cat => (
                        <p><a href={"/category/" + cat.name}>{cat.name}</a></p>
                    ))
                }
                {/* <p><a href="/category/thanksgiving recipe">thanksgiving recipe</a></p>
                <p><a href="/category/Dessert">Dessert Menu Category</a></p>
                <p><a href="/category/Chrismas Recipe">Chrismas Recipe</a></p>
                <p><a href="/category/soup">Soup Category</a></p> */}
            </div>
            );
        } else if (this.state.width < 1000) {

            return (
                <div>
                    {
                        category.map(cat => (
                            <Card imgUrl={cat.backgroudImg} desc={cat.name} link={"/category/" + cat.name}/>
                        ))
                    }
                </div>
                );
        } else {
            return (
                <div>
                <div className={styles.GridContainer}>
                
                <div className={styles.big_grid_1}>
                    <a href ="/category/soup"><img className ={styles.homeimg} src="/images/soupDishCat.jpg" href></img></a>
                </div>
                {
                    dishes
                    .filter(dish => dish.category === "Thanksgiving Recipe")
                    .slice(0,4)
                    .map(dish => (<div><a href={"/detail/" + dish.id}><img className ={styles.homeimg} src={dish.img.url}></img></a></div>))
                }
                {
                    dishes
                    .filter(dish => dish.category === "Soup")
                    .slice(0,4)
                    .map(dish => (<div><a href={"/detail/" + dish.id}><img className ={styles.homeimg} src={dish.img.url}></img></a></div>))
                }
                <div className={styles.big_grid_2}>
                    <a href ="/category/thanksgiving recipe"><img className ={styles.homeimg} src="/images/thanksGivingCate.jpg" href></img></a>
                </div> 
                </div>
                </div>
            );
        }
        
    }

    reRender = () => {
        console.log("rerender to size" + document.body.clientWidth)
        this.setState({width: document.body.clientWidth});
        // render()
    }
}