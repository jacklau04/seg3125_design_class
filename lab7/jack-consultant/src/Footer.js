import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{
                   color: "white",
               }}>
              Jack the Consultant
            </h6>
            <p style={{
                   color: "white",
               }}>
              We provide the most suitable consultant service for you!
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{
                   color: "white",
               }}>Info</h6>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/how-it-works">How it works</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{
                   color: "white",
               }}>
              Others
            </h6>
            <p>
              <a href="/event">Event</a>
            </p>
            <p>
              <a href="/explore">Explore</a>
            </p>
            <p>
              <a href="/help">Help</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{
                   color: "white",
               }}>Contact</h6>
            <p style={{
                   color: "white",
               }}>
              <i className="fa fa-home mr-3" style={{
                   color: "white",
               }}/> Ottawa, ON K1F F2U, Canada
            </p>
            <p style={{
                   color: "white",
               }}>
              <i className="fa fa-envelope mr-3" style={{
                   color: "white",
               }}/> info@jacktheconsultant.com
            </p>
            <p style={{
                   color: "white",
               }}>
              <i className="fa fa-phone mr-3" style={{
                   color: "white",
               }}/> + 01 416 567 88
            </p>
            <p style={{
                   color: "white",
               }}>
              <i className="fa fa-print mr-3" style={{
                   color: "white",
               }}/> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
    
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;