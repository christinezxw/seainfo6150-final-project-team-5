import React, { Component } from "react";
import styles from './Navigation.module.css'


export default class Navigation extends Component {

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
        if (this.state.width < 800) {
            return (
            
            <div className ={styles.naviDiv}>
                <h1 className = {styles.navih1} align="center">Give me 5 Recipe</h1>
                <div className={styles.dropdownDiv}>
                    
                    <span className = {styles.icon}><div className = {styles.menuicon}></div></span>
                    
                    <div className={styles.dropdown}>
                        <ul className={styles.navigationul0}>
                            <li className={styles.inline0}><a className={styles.navia1}href="/">Home</a></li>
                            <li className={styles.inline0}><a className={styles.navia1}href="/categorylist">Category</a></li>
                            <li className={styles.inline0}><a className={styles.navia1}href="/subscribe">Subscribe</a></li>
                            <li className={styles.inline0}><a className={styles.navia1}href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                

                </div>
                    
            </div>
            );
        } else {
                return (
                    <section>
                        <h1 className = {styles.navih1} align="center">Give me 5 Recipe</h1>
                        <ul className={styles.navigationul}>
                            <li className={styles.inline}><a className={styles.navia}href="/">Home</a></li>
                            <li className={styles.inline}><a className={styles.navia}href="/categorylist">Category</a></li>
                            <li className={styles.inline}><a className={styles.navia}href="/subscribe">Subscribe</a></li>
                            <li className={styles.inline}><a className={styles.navia}href="/aboutus">About Us</a></li>
                        </ul>

                    </section>
                    
                )
            }
    }

    reRender = () => {
        console.log("rerender to size" + document.body.clientWidth)
        this.setState({width: document.body.clientWidth});
        // render()
    }
}
