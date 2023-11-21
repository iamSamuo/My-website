import React from "react";
import { skills } from "../../data";

const About = () => {
  return (
    <div className="container about-container mt-5">
      <div className="about col col-10">
        <img
          className="img-fliud mt-9 "
          src="../../../images/Me.jpeg"
          alt="me"
        />
        <div className="description">
          <h3>Sammy Kariuki</h3>
          <p>
            Hello there, am Sammy. I am passionate about learning how things
            work and enjoy the process of learning new technologies that I can
            apply to my work and personal projects. I also enjoy creativity as
            well as solving real world problems through code. Feel free to reach
            out for anything.
          </p>
        </div>
        <div className="skills ml-5 ">
          <h4 className="mt-3 mb-3">Skills</h4>
          <div className="row mb-5">
            {skills.map((skill) => (
              <div key={skill.id} className="col-md-4 ml-3 ">
                <p className=" btn btn-warning">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
