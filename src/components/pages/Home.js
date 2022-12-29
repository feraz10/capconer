import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
 
  CardText,
  CardTitle,
} from "reactstrap";
import Men from "../image/Men.jpg";
import women from "../image/women.jpg";
import kids from "../image/kids.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import { Wave } from "react-animated-text";
export default function Home() {
  return (
    <div>
      <br />
      <div className="arrivals">
        <Wave text=" New Arrivals " />
      </div>
      <br />
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={Men} top width="50%" />
          <CardBody>
            <CardTitle tag="h5">Men </CardTitle>

            {/* <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText> */}
            <Link className="btn btn-outline-dark" color="warning" to="/men">
              Click
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={women} top width="50%" />
          <CardBody>
            <CardTitle tag="h5">Women </CardTitle>

            {/* <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText> */}
            <Link className="btn btn-outline-dark" color="warning" to="/women">
              Click
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={kids} top width="50%" />
          <CardBody>
            <CardTitle tag="h5">Kids </CardTitle>

            <Link
              className="btn btn-outline-dark warning"
              color="warning"
              to="/kids"
            >
              Click
            </Link>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
