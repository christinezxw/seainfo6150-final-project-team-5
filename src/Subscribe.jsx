import React from "react";
import SubscribeForm from './SubscribeForm.jsx';
import BreadCrumbNavigation from './commonComponents/BreadCrumbNavigation'
import styles from './Subscribe.module.css';

const Subscribe =(props) => {
    return (
        <div>
            <BreadCrumbNavigation nav={[["Home", "/"], ["Subscirbe", "/subscribe"]]}/>
            <header className = {styles.header}>
                SUBSCRIBE FOR MORE!!
            </header><br/>
            <form>
                <SubscribeForm/>
            </form><br/>
        </div>


    )
}

export default Subscribe;
