import React from "react";
import SubscribeForm from './SubscribeForm.jsx';
import styles from './Subscribe.module.css';

const Subscribe =(props) => {
    return (
        <div>
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
