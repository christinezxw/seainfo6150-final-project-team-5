import React from 'react'
import styles from './Home.module.css'

const Home = () => {

    return (
        
        <section>
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
        </section>
    )
}


export default Home
