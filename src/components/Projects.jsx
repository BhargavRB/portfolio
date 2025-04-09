import React from "react";

function Projects() {
  const projects = [
    {
      name: "Materno",
      description: "Healthcare platform for pregnant patients ensuring HIPAA compliance."
    },
    {
      name: "Meet Your Wardrobe",
      description: "Wardrobe management system with secure payment integration."
    },
    {
      name: "IKC Admin System",
      description: "Role-based access system for managing dog competitions and breeding reports."
    },
    {
      name: "InstaBot",
      description: "Automated web scraper with dynamic port allocation and proxy rotation."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
