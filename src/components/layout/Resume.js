import React from "react";
import cv from "../../assets/MY_CV.pdf";

const Resume = () => {
  return (
    <div className="container resume-container mt-5">
      <h2 className="p-5">My Resume</h2>
      <div className="resume">
        <embed
          src={cv}
          type="application/pdf"
          width="640"
          height="680"
          allow="autoplay"
        ></embed>
      </div>
      <a href={cv} target="_blank" className="btn btn-warning m-3">
        Download
      </a>
    </div>
  );
};

export default Resume;
