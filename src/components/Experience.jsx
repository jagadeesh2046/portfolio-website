import "../Styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <h2>Experience</h2>

      <div className="experience-card">

        <h3>Full Stack Developer Intern</h3>

        <h4>Unified Mentor</h4>

        <p>
          Developed a full-stack Clothing Swap Marketplace using React,
          Node.js, Express.js, and MongoDB.
        </p>

        <ul>
          <li>Implemented JWT Authentication and Authorization.</li>
          <li>Developed CRUD operations for clothing listings.</li>
          <li>Integrated image upload using Multer.</li>
          <li>Built swap request functionality.</li>
          <li>Implemented role-based Admin Dashboard.</li>
          <li>Deployed Backend on Render.</li>
          <li>Deployed Frontend on Vercel.</li>
        </ul>

      </div>

    </section>
  );
}

export default Experience;