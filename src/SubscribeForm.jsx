import React, { Component } from "react";
import styles from "./SubscribeForm.module.css"

export default class SubscribeForm extends Component {

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
        return (
            <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend className={styles.borderFont}>Personal Information:</legend>

                        <label>
                            First name :<br/>
                            <input type="firstName" placeholder="First Name"  name="text1"  required="required" /><br/>
                        </label>

                        <label>
                            Last name :<br/>
                            <input type="lastName" placeholder="Last Name" size="25" name="text2" required="required"/><br/>
                        </label>

                        <label>
                            Email Address :<br/>
                            <input type="emailAddress" placeholder="Email Address" name="text3" required="required" /><br/>
                        </label>

                        <label>
                            Phone Number (optional):<br/>
                            <input type="phoneNumber" placeholder="Phone Number" name="text4" /><br/>
                        </label>

                        <label>
                            Your Sex :<br/>
                            <input type="radio" name="radio1" />{''}
                            Male
                            <input type="radio" name="radio1" />{''}
                            Female
                            <input type="radio" name="radio1" />{''}
                            Prefer Not To Tell
                        </label>

                    </fieldset>

                    <br/>

                    <fieldset>
                        <legend className={styles.borderFont}>Other Information :</legend>

                        <label>
                            Your Favorite Section :<br/>
                            <input type="radio" name="radio2" />{''}
                            Thanksgiving
                            <input type="radio" name="radio2" />{''}
                            Christmas
                            <input type="radio" name="radio2" />{''}
                            Desserts
                            <input type="radio" name="radio2" />{''}
                            Soups
                        </label><br/>

                        <label>
                            Newsletters Frequency :<br/>
                            <input type="radio" name="radio3" />
                            Per Week
                            <input type="radio" name="radio3" />{''}
                            Per Month
                            <input type="radio" name="radio3" />{''}
                            Per Season
                            <input type="radio" name="radio3" />{''}
                            Never
                        </label><br/>
                        <label>
                            Suggestions :<br/>
                            <textarea name="message" rows="8" cols="50" placeholder=" In case you've got something to share! "/>
                        </label>
                    </fieldset><br/>

                <label>
                    <input type="submit" value="submit"/>
                </label>
            </form>

        )
    }
}

