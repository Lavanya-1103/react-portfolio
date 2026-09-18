import React from "react";

function Projects() {
  const projects = [
    {
      title: "House Price Prediction",
      description: "A machine learning project for predicting house prices.",
    },
    {
      title: "Food Delivery App",
      description: "A responsive web application for ordering food online.",
    },
    {
      title: "Job Portal",
      description: "A React-based online job portal for job seekers and recruiters.",
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;