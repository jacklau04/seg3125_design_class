import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';


const Explore = () => {
    return ( 
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Explore
          </h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            Pre-built Consultant Package
          </p>
          <MDBRow>
            <MDBCol md="6">
              <MDBIcon icon="hand-holding-usd" size="5x" className="red-text" />
              <h5 className="font-weight-bold my-4">Basic Financial Consulstant</h5>
              <p className="grey-text mb-md-0 mb-5">
                <b>Total Hours: 9</b>
              </p>
              <p className="grey-text mb-md-0 mb-5">
              <b>We provide consultant service related to your finacial needs.</b>
              </p>
              <Link to="/get-quote1">
              <button id="unique-id"  style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px',
                   textAlign: "center",
                   margin: "auto",
                   width: '75%',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '10px',
                   fontSize: "18px",
                   padding: "2px",
               }}>Get Quote</button>
               </Link>
            </MDBCol>
            <MDBCol md="6">
            <MDBIcon icon="briefcase" size="5x" className="red-text" />
            <h5 className="font-weight-bold my-4">Opeartion Consulstant</h5>
              <p className="grey-text mb-md-0 mb-5">
                <b>Total Hours: 5</b>
              </p>
              <p className="grey-text mb-md-0 mb-5">
              <b>Question regarding running a business? We are here for you!</b>
              </p>
              <Link to="/get-quote2">
              <button id="unique-id"  style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px',
                   textAlign: "center",
                   margin: "auto",
                   width: '75%',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '10px',
                   fontSize: "18px",
                   padding: "2px",
               }}>Get Quote</button>
               </Link>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{
               marginTop: '70px',
          }}>
            <MDBCol md="6">
              <MDBIcon icon="chess-knight" size="5x" className="red-text" />
              <h5 className="font-weight-bold my-4">Strategic Consulstant</h5>
              <p className="grey-text mb-md-0 mb-5">
                <b>Total Hours: 7</b>
              </p>
              <p className="grey-text mb-md-0 mb-5">
                <b>Provide details breakdown on the key drivers for your industry.</b>
              </p>
              <Link to="/get-quote3">
              <button id="unique-id"  style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px',
                   textAlign: "center",
                   margin: "auto",
                   width: '75%',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '10px',
                   fontSize: "18px",
                   padding: "2px",
               }}>Get Quote</button>
               </Link>
            </MDBCol>
            <MDBCol md="6">
            <MDBIcon icon="building" size="5x" className="red-text" />
            <h5 className="font-weight-bold my-4">Advanced Financial Help</h5>
              <p className="grey-text mb-md-0 mb-5">
                <b>Total Hours: 20</b>
              </p>
              <p className="grey-text mb-md-0 mb-5">
                <b>We provide DCF, liqudity and market research analysis.</b>
              </p>
              <Link to="/get-quote4">
              <button id="unique-id"  style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px',
                   textAlign: "center",
                   margin: "auto",
                   width: '75%',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '10px',
                   fontSize: "18px",
                   padding: "2px",
               }}>Get Quote</button>
               </Link>
            </MDBCol>
          </MDBRow>
        </section>
     );
}
 
export default Explore;
