import React, { useState } from "react";
import "./Stylesheets/Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import emailjs from '@emailjs/browser';
import SectionHeading from "./Components/SectionHeading";
import { Button, Spin, message } from "antd";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const validateParameter = (paramValue) => {
    if (!paramValue) {
      return true;
    }
    return false; // Parameter is valid
  };
  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    validateParameter(name)
      ? setNameError("Please Enter Name")
      : setNameError(null);
    validateParameter(email)
      ? setEmailError("Please Enter Email")
      : isValidEmail(email)
      ? setEmailError(null)
      : setEmailError("Please Enter Valid Email");
    validateParameter(message)
      ? setMessageError("Please Enter Message")
      : setMessageError(null);
    if (
      nameError !== null ||
      emailError !== null ||
      messageError !== null ||
      validateParameter(name) ||
      validateParameter(email) ||
      !isValidEmail(email) ||
      validateParameter(message)
    ) {
      setLoading(false);
      return null;
    }
    emailjs
      .sendForm('service_zo7pqwf', 'template_aatgd0c', e.target, 'Ey1vJAo1RA7JuvbCi')
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
          messageApi.success(
            "Thank you for contacting me! Your message has been successfully sent. I will get back to you as soon as possible."
          );
          // window.location.reload();
        },
        (error) => {
          messageApi.error(
            "Oops! Something went wrong while sending your message. Please try again later."
          );
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state after the API call is complete
      });
  };

  return (
    <>
      {contextHolder}
      <div className="contact" id="contact">
        <SectionHeading
          heading="Contact"
          quote="“If I had asked people what they wanted, they would have said faster horses. ”"
          quoteBy="- Henry Ford"
        />
        <div className="contact-div">
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <div className="input-field-container">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter Your Name"
                  className={nameError !== null ? "error-field" : ""}
                  onBlur={(e) => {
                    validateParameter(e.target.value)
                      ? setNameError("Please Enter Name")
                      : setNameError(null);
                  }}
                />
                {nameError !== null && (
                  <p className="error-paragraph">{nameError}</p>
                )}
              </div>
              <div className="input-field-container">
                <input
                  type="text"
                  name="user_email"
                  placeholder="Enter Email"
                  className={emailError !== null ? "error-field" : ""}
                  onBlur={(e) => {
                    validateParameter(e.target.value)
                      ? setEmailError("Please Enter Email")
                      : isValidEmail(e.target.value)
                      ? setEmailError(null)
                      : setEmailError("Please Enter Valid Email");
                  }}
                />
                {emailError !== null && (
                  <p className="error-paragraph">{emailError}</p>
                )}
              </div>
              <div className="input-field-container">
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Message"
                  className={messageError !== null ? "error-field" : ""}
                  onBlur={(e) => {
                    validateParameter(e.target.value)
                      ? setMessageError("Please Enter Message")
                      : setMessageError(null);
                  }}
                />
                {messageError !== null && (
                  <p className="error-paragraph">{messageError}</p>
                )}
              </div>
              {/* <input type="submit" className="contact-form-submit" /> */}
              <Button
                type="primary"
                htmlType="submit"
                className="contact-form-submit"
                icon={<Spin spinning={loading} />}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
          <div className="contact-information">
            <a
              href="https://www.linkedin.com/in/shashank-varshney-86sh001/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Link"
            >
              <LinkedInIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a
              href="https://github.com/Shashank152001/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Link"
            >
              <GitHubIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a href="mailto:varshneyshashank8846@gmail.com" aria-label="Mail Me">
              <AlternateEmailIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <br />
            <br />
            <br />
            Email :
            <p className="contact-information-paragraph">
              varshneyshashank8846@gmail.com
            </p>
            <br />
            Phone No. :
            <p className="contact-information-paragraph">+91-8094014707</p>
            <br />
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <p>© {new Date().getFullYear()} Shashank Varshney. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Contact;

/* <div class="ant-message ant-message-top css-dev-only-do-not-override-12jzuas" style="left: 50%; transform: translateX(-50%); top: 8px;">
  <div class="ant-message-notice ant-message-notice-success css-dev-only-do-not-override-12jzuas">
    <div class="ant-message-notice-content">
      <div class="ant-message-custom-content ant-message-success">
        <span role="img" aria-label="check-circle" class="anticon anticon-check-circle">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
        </span>
        <span>Thank you for contacting me! Your message has been successfully sent. I will get back to you as soon as possible.</span>
      </div>
    </div>
  </div>
</div> */
