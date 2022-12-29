import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { CgCircleci } from "react-icons/cg";
import { CgArrowLeftR } from "react-icons/cg";
export default function About() {
  return (
    <Fragment>
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <br />
            <h1>
              <CgCircleci /> Cap Corner
            </h1>
            <br />
            <h2>about us</h2>
            <br />
            <h4>timeline</h4>
            <br />
            <p>
              What started in 2005, with a simple goal of increasing awareness
              about the skate culture in Arrah, has now evolved into a deep
              rooted passion towards accelerating the growth of our community.
              Just like the community we represent, we are unorthodox in our
              methods, eccentric in our style, and determined in our approach.
              We strive to keep our work unique and smart, with room for a
              little magic.
            </p>
            <br />

            <Link
              className="btn btn-outline-dark"
              color="warning"
              to="/contact"
            >
              Get in Touch <CgArrowLeftR />
            </Link>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
          <div className="col-sm-8">
            <h4>
              <strong>vision:</strong> To build the biggest self sustaining
              community by empowering vario.us artists & athletes
            </h4>
            <br />
            {/* <p>
              <strong>our founder:</strong> in the summer of 2005, hje stated
             
            </p> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
