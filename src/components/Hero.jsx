import "../styles/Hero.css";
import profile from "../assets/profile.jpeg"
import { resume } from "react-dom/server";
function Hero() {
    
  return (
    <section id="hero" className="hero">

      <div className="hero-left">

        <h3>Hello, I'm</h3>

        <h1>Nallamilli Jagadeeshwari Reddy</h1>

        <h2>Full Stack Java Developer</h2>

        <p>
          I build responsive and scalable web applications using
          Java, Spring Boot, React.js, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
         <a href="/resume.pdf" download>
            <button>Download Resume</button>
         </a>
  <a href="/resume.pdf" target="_ blank">
       <button>View Resume</button>
      </a>          <button onClick={()=>window.open(
            "https://github.com/jagadeesh2046",
            "_blank"
          )}>GitHub</button>
<button onClick={()=>window.open(
    "https://www.linkedin.com/in/n-jagadeeshwari-reddy-2b4b2a3b8/",
    "_blank"
    
)}>
  LinkedIn
</button>
        </div>

      </div>

      <div className="hero-right">

        <div className="profile-circle">
            
            <img src={profile} alt="profile"></img>
        </div>

      </div>

    </section>
  );
}

export default Hero;