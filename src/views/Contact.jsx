import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { contactLinks } from "../constants";
// import { env } from "../index";
// import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "@.env";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  // const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(message)
    event.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_EMAILJS_USER_ID,
    )
    .then(
    (result) => {
      alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
      alert("An error occurred, Please try again", error.text);
    }
    );
  }

  return (
    <div id="contact">
    <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>ME</span>
          </div>
          <div class="app-contact">
            <div style={{margin:"10px", width:"fit-content"}}>Email: <a href={"mailto:kothariwork@gmail.com"} style={{color:"inherit"}}>kothariwork@gmail.com</a></div>
            <div style={{margin:"10px"}}>Location: California, USA</div>
            <div style={{margin:"10px"}}>Socials:  
              <div className="flex">
                {
                  contactLinks.map((el) => (
                    <a
                      href={el.link}
                      className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                    >
                      <img alt="" src={el.url} />
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="screen-body-item">
        <form onSubmit={handleSubmit}>
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" name="name" placeholder="NAME" value={message.name} onChange={handleChange}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="email" placeholder="EMAIL" value={message.email} onChange={handleChange}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="contact" placeholder="CONTACT NO." value={message.contact} onChange={handleChange}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" name="message" placeholder="MESSAGE" value={message.message} onChange={handleChange}/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button" type="submit">SEND</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Contact;
