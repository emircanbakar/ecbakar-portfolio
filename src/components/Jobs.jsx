import React from "react";
import BigCards from "../UI/BigCards";
import "../assets/Jobs.css";
import { jobs, projects } from "../data/ecb";

const Jobs = () => {
  return (
    <div className="card-container">
      <BigCards>
        <div className="title-head">{"<projects>"}</div>
        <div className="list">
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="list-item">
                <p>{project.projectName}</p>
                <a href={project.link} className="link-img">
                  <img className="jobs-img"
                    src={project.icon}
                    alt={project.projectName}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="title-head">{"</projects>"}</div>
      </BigCards>
      <BigCards>
        <div className="title-head">{"<experience>"}</div>
        <div className="list">
          <ul>
            {jobs.map((job) => (
              <li key={job.id} className="list-item">
                <p>{job.jobName}</p>
                <img src={job.src} alt={job.jobName} className="jobs-img"/>
              </li>
            ))}
          </ul>
        </div>
        <div className="title-head">{"</experience>"}</div>
      </BigCards>
    </div>
  );
};

export default Jobs;
