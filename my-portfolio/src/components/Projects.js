import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    { title: 'Project One', description: 'Description of project one.', link: '#' },
    { title: 'Project Two', description: 'Description of project two.', link: '#' },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
