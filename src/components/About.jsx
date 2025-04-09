import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a Software Engineer with expertise in backend development, cloud computing, and scalable solutions.
          I have experience building healthcare platforms, real estate systems, and automation tools. My passion lies in
          crafting efficient, secure, and user-friendly applications.
        </p>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>BCA</strong> - Sutex Bank College of Computer Applications & Science (CGPA: 7.48)
            </li>
            <li>
              <strong>MCA</strong> - Jain University (SGPA: 8.6)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
