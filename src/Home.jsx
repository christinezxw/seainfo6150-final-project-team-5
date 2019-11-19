import React, { Component } from "react";
import styles from './Home.module.css'
import Card from './commonComponents/Card'



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
                <p><a href="#">Thanks Giving Category</a></p>
                <p><a href="#">Dessert Menu Category</a></p>
                <p><a href="#">Chinese Food Category</a></p>
                <p><a href="#">Soup Category</a></p>
            </div>
            );
        } else if (this.state.width < 800) {
            return (
                <div>
                    <p>screen width : {this.state.width}</p>
                    <p>code point 2</p>
                    <Card imgUrl="/images/treefrog.jpg" desc="test1"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test2"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test3"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test4"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test5"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test6"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="test7"/>
                </div>
                );
        } else {
            return (
                <div>
                <p>screen width : {this.state.width}</p>
                <p>code point 3</p>
                <div className={styles.GridContainer}>
                
                <div className={styles.big_grid_1}><img src="/images/treefrog.jpg"></img></div>
                <div><a href="/detail/1001"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1002"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1003"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1004"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1005"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1006"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/3001"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/3002"><img src="/images/treefrog.jpg" href></img></a></div>
                <div className={styles.big_grid_2}><img src="/images/treefrog.jpg"></img></div> 
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