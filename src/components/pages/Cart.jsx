import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import denim from "../image/productimages/denim black cap.jpg"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Cart() {

 toast.error("Sorry Cart  Services unavailable 🥺 " , {
          position: toast.POSITION.TOP_CENTER,
        });

  return (
   <div>
      <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart<AiOutlineShoppingCart/> </span>
              <span className="h4">(1 item in your cart)</span>
            </p>

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src={denim}
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">Denim  cap</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <MDBIcon
                          fas
                          icon="circle me-2"
                          style={{ color: "#fdd8d2" }}
                        />
                        Black
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$0</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">$0</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$0</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
             
              <Link  className="btn btn-outline-dark me-2   " to="/">Continue shopping</Link>
              {/* <MDBBtn size="lg">Add to cart</MDBBtn> */}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
 </div>
  );
}
