import React, { Component } from "react";
import styles from "./SubscribeForm.module.css"

export default class SubscribeForm extends Component {

    state = {
        FirstName: '',
        LastName: '',
        email: '',
        number: '',
        gender: '',
        section: '',
        frequency: '',
        suggestion: '',
        errormessage_num: '',
        errormessage_email: '',
        birthday: '',
        market: '',
    };

    handleFormSubmit = (e) => {
        alert('Hi ' + this.state.FirstName + '! Thank you for your subscribe!');
        e.preventDefault();
    };


    handleChanges = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[name]: value});
        let errNumber = '';
        let errEmail ='';
        if (name === "number") {
            if (value != "" && !Number(value)) {
                errNumber = <strong>Your input must be number! </strong>;
            }
        }
        if(name === "email"){
            if (value != "" && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
                errEmail = <strong>Wrong format! </strong>;
            }
        }
        this.setState({errormessage_num: errNumber});
        this.setState({errormessage_email: errEmail});
    };

    render() {
        const genders = ['Male', 'Female', 'Prefer not to tell'];
        const Frequencies = ['Per Week', 'Per Month', 'Never'];

        return (
            <form onSubmit={this.handleFormSubmit}>
                <fieldset>
                    <legend className={styles.borderFont}>Personal Information:</legend>

                    <label>
                        First name :<br/>
                    </label>
                    <input name="FirstName" type="text" placeholder="First Name" value={this.state.FirstName}
                           onChange={this.handleChanges} required="required"/><br/>


                    <label>
                        Last name :<br/>
                    </label>
                    <input name="LastName" type="text" placeholder="Last Name" value={this.state.LastName}
                           onChange={this.handleChanges} required="required"/><br/>

                    <label>
                        Birthday :<br/>
                    </label>
                    <input name="birthday" type="date" value={this.state.birthday}
                           onChange={this.handleChanges} required="required"/><br/>

                    <label>
                        Email Address :<br/>
                    </label>
                    <input name="email" type="text" placeholder="Email Address" value={this.state.email}
                           onChange={this.handleChanges} required="required"/>
                    {this.state.errormessage_email}<br/>

                    <label>
                        Phone Number (optional):<br/>
                    </label>
                    <input name="number" type="text" placeholder="Phone Number" value={this.state.number}
                           onChange={this.handleChanges}/>
                    {this.state.errormessage_num}<br/>

                    <label>Gender :</label><br/>
                    {genders.map((gender, i) =>
                        <label key={i}>
                            <input
                                name="gender"
                                value={gender.toUpperCase()}
                                checked={this.state.gender === gender.toUpperCase()}
                                onChange={this.handleChanges}
                                type="radio"
                                required="required"/>
                            {gender}
                        </label>
                    )}
                </fieldset>

                <fieldset>
                    <legend className={styles.borderFont}>Other Information :</legend>

                    <label>Favorite Section :
                        <select name ="section" value={this.state.section} onChange={this.handleChanges} required="required">
                            <option value="Thanksgiving">Thanksgiving</option>
                            <option value="Christmas">Christmas</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Soups">Soups</option>
                        </select>
                    </label><br/>

                    <label>Newsletter Frequency :</label><br/>
                    {Frequencies.map((frequency, i) =>
                        <label key={i}>
                            <input
                                name="frequency"
                                value={frequency.toUpperCase()}
                                checked={this.state.frequency === frequency.toUpperCase()}
                                onChange={this.handleChanges}
                                type="radio"
                                required="required"/>
                            {frequency}
                        </label>
                    )}<br/>

                    <label>How Did You Hear About Us :
                        <select name ="market" value={this.state.market} onChange={this.handleChanges} required="required">
                            <option value="email">Email Advertisements</option>
                            <option value="FriendsFamily">Friends & Family</option>
                            <option value="OnlineAds">Online Advertisements</option>
                            <option value="InternetSearch">Internet Search</option>
                        </select>
                    </label><br/>

                    <label>Suggestions (optional):</label><br/>
                    <textarea name="suggestion" rows="8" cols="50" placeholder=" In case you've got something to share! " value={this.state.suggestion} onChange={this.handleChanges}/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

