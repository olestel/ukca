import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import Title from "../ui-components/title/title";
import ContactInfo from "./contactInfo/contactInfo";
import Modal from "../contact-modal/Modal";

import ContactUsImg from "../../assets/contact/contact-us-img.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();

    const template_params = {
      name: name,
      email: email,
      message: message,
    };

    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "GcENqPceozdJqnDvl";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "template_3bmyvii";

    emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          showSuccessModal();
        } else {
          showErrorModal();
        }
      },
      function (error) {
        showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  const showSuccessModal = () => {
    setSuccessModal(true);
    setSending(false);
    resetForm();
  };
  // ERROR MODAL
  const showErrorModal = () => {
    setErrorModal(true);
    setSending(false);
    resetForm();
  };
  // RESET CONTACT FORM
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  // CLOSE ALL MODALS
  const closeModal = () => {
    setSuccessModal(false);
    setErrorModal(false);
  };

  let submitButtonRender = (
    <div className="small__button">
      <button aria-label="send message" type="submit" value="Send Message">
        Send Message
      </button>
    </div>
  );

  if (sending) {
    submitButtonRender = (
      <div className="small__button sending-btn">
        <div className="flex-center">
          <div className="sbl-circ"></div>
        </div>
      </div>
    );
  }

  let modalRender = null;
  if (successModal) {
    modalRender = <Modal closeModal={closeModal} status="success" />;
  } else if (errorModal) {
    modalRender = <Modal closeModal={closeModal} status="error" />;
  }

  return (
    <div id="contact">
      {modalRender}
      <div className="wrapper">
        <Title title="CONTACT US" />
        <p className="font12">
          Describe your project. We will contact you as soon as possible.
        </p>

        <Grid container className="padding40">
          <Grid item md={12} lg={6}>
            <form id="contact-form" onSubmit={handleSubmit}>
              <h4 className="font30 weight800 padding30">Send Us Message</h4>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <textarea
                rows="6"
                Grids="50"
                placeholder="Message..."
                required
                name="message"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {submitButtonRender}
            </form>
          </Grid>
          <Grid item md={12} lg={6}>
            <div className="flex-center">
              <img src={ContactUsImg} alt="contact background" />
            </div>
          </Grid>
        </Grid>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
