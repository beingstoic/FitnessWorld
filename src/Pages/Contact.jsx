import React, { useState } from "react";
import "../assets/forms.css";
const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handleMessageInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="form-container">
      <div className="banner-about">
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />

        <textarea
          name=""
          className="text-field"
          id=""
          placeholder="write your query here!"
          cols="30"
          rows="10"
          value={values.message}
          onChange={handleMessageInputChange}
        ></textarea>
        <button type="submit" className="button-black">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="success-message">
          Success! Thank you for registering
        </div>
      )}
    </div>
  );
};

export default Contact;
