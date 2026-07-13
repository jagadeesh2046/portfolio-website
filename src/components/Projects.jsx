import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Clothing Swap Marketplace",
      description:
        "A full-stack web application that allows users to exchange clothes through swap requests with secure authentication and role-based access.",
      technologies:
        "React.js, Node.js, Express.js, MongoDB, JWT, Multer",
        gitHub:"https://github.com/jagadeesh2046/clothing-swap-marketplace",
        live:"https://clothing-swap-marketplace-jade.vercel.app"
    },
    {
      title: "QR Code Generation System",
      description:
        "Developed during my internship to generate and manage QR codes for vehicle and challan details using Java and MySQL.",
      technologies:
        "Java, JDBC, MySQL",

    },
  ];

  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>Technologies Used</h4>

            <span>{project.technologies}</span>

            <div className="project-buttons">
              <button onClick={()=>window.open(project.gitHub,"_blank")}>GitHub</button>
              <button onClick={()=>window.open(project.live,"_blank")}>Live Demo</button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;