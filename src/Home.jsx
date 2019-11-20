import React, { Component } from "react";
import styles from './Home.module.css'
import Card from './commonComponents/Card'
import dishes from "./data/dishes.json"



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
            <div>
                <p>screen width : {this.state.width}</p>
                <p>code point 1</p>
                <p><a href="/thanksgiving recipe">thanksgiving recipe</a></p>
                <p><a href="/Dessert">Dessert Menu Category</a></p>
                <p><a href="/Chrismas Recipe">Chrismas Recipe</a></p>
                <p><a href="/soup">Soup Category</a></p>
            </div>
            );
        } else if (this.state.width < 1000) {

            return (
                <div>
                    <p>screen width : {this.state.width}</p>
                    <p>code point 2</p>
                    {
                        dishes.map(dish => (
                            <Card imgUrl={dish.img.url} desc={dish.name} link={"/detail/" + dish.id}/>
                        ))
                    }
                </div>
                );
        } else {
            return (
                <div>
                <p>screen width : {this.state.width}</p>
                <p>code point 3</p>
                <div className={styles.GridContainer}>
                
                <div className={styles.big_grid_1}>
                    <h1>Soup</h1>
                    <a href ="/category/soup"><img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/1/2/FNM_120110-Ask-Ellie-001_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539602880.jpeg" href></img></a>
                </div>
                {
                    dishes
                    .filter(dish => dish.category === "thanksgiving recipe")
                    .slice(0,4)
                    .map(dish => (<div><a href={"/detail/" + dish.id}><img src={dish.img.url}></img></a></div>))
                }
                {
                    dishes
                    .filter(dish => dish.category === "soup")
                    .slice(0,4)
                    .map(dish => (<div><a href={"/detail/" + dish.id}><img src={dish.img.url}></img></a></div>))
                }
                <div className={styles.big_grid_2}>
                    <h1>Thanksgiving</h1>
                    <a href ="/category/thanksgiving recipe"><img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/26/0/BX0808H_balsamic-roasted-brussels-sprouts-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1402583469880.jpeg" href></img></a>
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