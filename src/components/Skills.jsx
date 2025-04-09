import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          <div>
            <strong>Languages:</strong> Javascript, PHP
          </div>
          <div>
            <strong>Frontend Technologies:</strong> HTML5, jQuery, Bootstrap, React.js
          </div>
          <div>
            <strong>Backend Technologies:</strong> Laravel, CodeIgniter, Node.js
          </div>
          <div>
            <strong>Database:</strong> MySQL, PostgreSQL, MongoDB
          </div>
          <div>
            <strong>Cloud Computing:</strong> AWS Services (S3, EC2, Secret Manager, SQS), Digital Ocean
          </div>
          <div>
            <strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket
          </div>
          <div>
            <strong>Collaboration and Project Management:</strong> Agile Methodology, Scrum, Jira
          </div>
          <div>
            <strong>Other Skills:</strong> CICD, RESTful API, Code Review, Debugging, Unit Testing (PEST), Docker(basic)
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
