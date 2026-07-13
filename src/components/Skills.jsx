import "../Styles/Skills.css";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "REST API",
  ];

  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-container">
     {skills.map((skill)=>(
        <div>
        {skill}
        </div>
        
     ))}
      </div>

    </section>
  );
}

export default Skills;