import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import YoutubeEmbed from "./YoutubeEmbed";

const HowItWorks = () => {
    return (
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            How it works?
          </h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            We provide custom business consultant service that match your needs!
          </p>
          <MDBRow>
            <MDBCol md="4">
              <MDBIcon icon="chart-area" size="3x" className="red-text" />
              <h5 className="font-weight-bold my-4">Analytics</h5>
              <p className="grey-text mb-md-0 mb-5">
                We give you detail analytics to help you make a better business decision.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="book" size="3x" className="cyan-text" />
              <h5 className="font-weight-bold my-4">Tutorials</h5>
              <p className="grey-text mb-md-0 mb-5">
                There are hunderd of tutorial coming from expert of our firm to help you to start.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon far icon="comments" size="3x" className="orange-text" />
              <h5 className="font-weight-bold my-4">Support</h5>
              <p className="grey-text mb-md-0 mb-5">
                24/7 business support to help you at the time you need.
              </p>
            </MDBCol>
          </MDBRow>
          <h2 className="h1-responsive font-weight-bold my-5" style={{
                 marginTop: '50px',
          }}>Business 101</h2><YoutubeEmbed embedId="Z-tWViGvrFc" />
        </section>
    );
}
 
export default HowItWorks;