import React, { Component } from "react";
// import * as firebase from "firebase";

import CrossyOpenWings from "../utils/crossy-open-wings";

import styles from "./contact-form.module.scss";
// import firebaseConfig from "../utils/firebaseConfig";

// //const firebaseConfig = process.env.GATSBY_FIREBASE;

// firebase.initializeApp(firebaseConfig);

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    country: "",
  };

  // messagesRef = firebase.database().ref("messages");

  // saveMessage(name, email, message, country) {
  //   var newMessageRef = this.messagesRef.push();
  //   newMessageRef.set({
  //     name: name,
  //     email: email,
  //     message: message,
  //     country: country,
  //   });
  // }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`Thank you for your message, ${this.state.name}.`);
  //   this.saveMessage(
  //     this.state.name,
  //     this.state.email,
  //     this.state.message,
  //     this.state.country
  //   );
  //   this.setState(() => ({
  //     name: "",
  //     email: "",
  //     message: "",
  //     country: "",
  //   }));
  // };
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>How can we help you?</h1>

        <form
          id="contact-form"
          className={styles.form}
          // onSubmit={this.handleSubmit}
          action="https://getform.io/f/fe92951a-4b98-4328-bd32-566820ce3504"
          method="POST"
        >
          <div className={styles.crossy}>
            <CrossyOpenWings />
          </div>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />

          <input
            className={styles.formInput}
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            className={styles.formInput}
            type="country"
            name="country"
            placeholder="Country"
            value={this.state.country}
            onChange={this.handleInputChange}
          />

          <textarea
            className={styles.formInput}
            rows="8"
            cols="40"
            form="contact-form"
            type="text"
            name="message"
            placeholder="Quesitons/Comments"
            value={this.state.message}
            onChange={this.handleInputChange}
          />

          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
