import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top">
        <div className="container col-8">
          <Link to="/" className="navbar-brand fs-5">
            Sammy Kariuki
          </Link>

          <div className="titles col-4">
            <ul className="navbar-nav ms-auto mb-1 mg-lg- ml-auto">
              <li className="nav-item px-4">
                <Link to="/" className="nav-link ">
                  Projects
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </li>
              <li className="nav-item px-4 ">
              <a className ="btn btn-warning"href="mailto:sammykariuki956@gmail.com">
              <MdEmail style={{fontSize:"30px"}} />
            </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
