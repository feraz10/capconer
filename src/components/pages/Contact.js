import React from 'react';
import { Button, Container} from 'reactstrap';
import { toast } from "react-toastify";
import {
  AiOutlinePhone,
  AiFillMail,
  AiOutlinePushpin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {

    const notify = () => {
       
        toast.error("Sorry Email 📧  Services unavailable 🥺 ", {
          position: toast.POSITION.TOP_CENTER,
        });
    }

    return (
      <Container>
        <div id="contact" classNameName="container-fluid bg-grey text-center " >
          <h2 classNameName="text-center">CONTACT</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Contact us and we'll get back to you within 24 hours.</p>
              <p>
                <span className="glyphicon glyphicon-map-marker"></span>
                <AiOutlinePushpin /> Gopali Chowck Arrah,Bihar India
              </p>
              <p>
                <span className="glyphicon glyphicon-phone"></span>
                <AiOutlinePhone /> +91-9534531830
                <br />
                <AiOutlineWhatsApp /> +91-7903303582
              </p>
              <p>
                <span className="glyphicon glyphicon-envelope"></span>{" "}
                <AiFillMail /> capcorner121@gmail.com
              </p>
            </div>
            <div className="col-sm-7 slideanim">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Comment"
                rows="5"
              ></textarea>
              <br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <div>
                    <Button color="danger" onClick={notify}>
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
}

export default Contact;