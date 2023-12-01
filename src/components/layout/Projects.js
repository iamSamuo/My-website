import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="container mt-5 d-flex  justify-content-center align-items-center">
      <div className="row">
        <p className="mt-5">Software Engineering Portfolio</p>
        <hr />
        {projects?.map((project) => (
          <div
            className="card m-5 ml-2 project-card "
            style={{ width: "21rem" }}
            key={project.name}
          >
            <img
              src={project.img_url}
              className="card-img-top"
              alt={project.name}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <hr />
              <p className="card-text">{project.technologies}</p>
              {project.view ? (
                <a href={project.view} className="btn btn-warning">
                  View Project
                </a>
              ) : (
                <h4 style={{ color: "red" }}>{project.status}</h4>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
