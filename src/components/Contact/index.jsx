import { useState } from "react";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://daphneaugier.com/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      setStatus("Error sending message");
    }
  };

  return (
    <section className="contact">
      <div className="contact-intro">
      <h1>
      Let's get in touch,<br />
                and create something {" "}
                <ReactTyped strings={["exciting!", "useful!",  "pretty!"]} 
                typeSpeed={100}
                backSpeed={100}
                cursorChar="|" loop /> 
      </h1>
        <p className="contact-text">
          I'd love to hear from you!
          <br />
          <br />
          Whether you want to discuss a project, 
          explore collaboration opportunities, or just chat about design and
          creativity, feel free to reach out!
          <br />
          <br />
        </p>
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Email address"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>

            <button type="submit" className="contact-button">
              Let's Talk{" "}
              <FontAwesomeIcon icon={faPaperPlane} className="fa-icon" />
            </button>
          </form>
        </div>
        <p>{status && <p className="mt-2 text-center">{status}</p>}</p>
      </div>
    </section>
  );
}

export default Contact;
