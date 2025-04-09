import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Metronomic Technology Solutions Private Limited",
      duration: "Jan 2023 - Current",
      role: "Software Engineer",
      description: [
        "Developed healthcare platforms like Materno and Slimmed using Laravel and React.",
        "Migrated infrastructure to AWS EC2 with auto-scaling and integrated AWS services like SQS and S3.",
        "Recognized as Employee of the Month four times."
      ]
    },
    {
      company: "Infyom Technologies",
      duration: "Aug 2020 - Dec 2022",
      role: "Sr. Backend Developer",
      description: [
        "Built multiple client projects using PHP and JavaScript frameworks.",
        "Automated real estate marketing via Facebook & Instagram API integrations.",
        "Optimized RESTful APIs for handling over 1M+ requests per month."
      ]
    },
    {
      company: "Nova One Click Solution",
      duration: "Oct 2019 - Jul 2020",
      role: "Jr PHP Developer",
      description: [
        "Started as a Junior Developer, quickly adapting to new technologies like Laravel and CodeIgniter.",
        "Designed and integrated subscription-based plans for real estate management systems."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-role">
              <strong>{exp.role}</strong>
            </p>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
