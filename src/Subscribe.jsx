import React, { Component } from "react";
import styles from "./Subscribe.module.css";

export default class Subscribe extends Component {
    handleChange;
    constructor(props) {
        super(props);
        this.state = {
            submittedForm: null
        };
    }

    handleSubmit(event) {
        alert('Thank you for your subscribe!');
        event.preventDefault();
    }

    render() {
        return(
            <div className={styles.div}>

                <header className = {styles.header}>
                    Subscribe Page<br/><br/>
                </header>

                <section className = {styles.form}>
                    <form onSubmit={this.handleSubmit}>

                        <label>
                            First Name:
                            <input type="firstName" placeholder="First Name" name="text1" /><br/>
                        </label>

                        <label>
                            Last Name:
                            <input type="lastName" placeholder="Last Name" name="text2" /><br/>
                        </label>

                        <label>
                            Your Sex:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="null">Prefer not to tell</option>
                            </select><br/>
                        </label>

                        <label>
                            Email Address:
                            <input type="emailAddress" placeholder="Email Address" name="text3" /><br/>
                        </label>

                        <label>
                            Your Favorite Category:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="thanksgiving">Thanksgiving</option>
                                <option value="christmas">Christmas</option>
                                <option value="soups">Soups</option>
                                <option value="desserts">Desserts</option>
                            </select><br/>
                        </label>
                        
                        <label>
                            Frequency
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="Per Day">Per Day</option>
                                <option value="Per Week">Per Week</option>
                                <option value="Per Month">Per Month</option>
                            </select><br/>
                        </label>
                        
                        <label>
                            <input type="submit" value="submit" />
                        </label>
                    </form>
                </section>

            </div>
        );
    }
}
