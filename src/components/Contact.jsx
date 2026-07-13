import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p>
        I'm always interested in internship opportunities, full-time roles,
        and exciting projects.
      </p>

      <div className="contact-info">


        <p><strong>Email:</strong>
        <a href="mailto:njagadeesh723@gmail.com"
        target="_blank">
            njagadeesh723@gmail.com 
        </a>
       </p>

        <p>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/n-jagadeeshwari-reddy-2b4b2a3b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>
          <a
            href="https://github.com/jagadeesh2046"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>

      </div>

    </section>
  );
}

export default Contact;