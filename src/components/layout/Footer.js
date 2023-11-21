import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="container">
      <div className="footer">
        <p>{`Sammy Kariuki © ${currentYear}`}</p>
        <ul>
          <li>
            <a href="https://twitter.com/samuokimkenya">
              <FaXTwitter className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sammy-kariuki-71328215b/">
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="mailto:sammykariuki956@gmail.com">
              <MdEmail className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/iamSamuo">
              <FaGithub className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
