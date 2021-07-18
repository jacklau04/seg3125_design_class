import React from "react";
import logo from './Business Logo.png';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';



const Home = () => {

  return (
      
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold mx-auto my-5">
          Welcome
      </h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">We are dedicated to providing the best cpnsultant service to our customers</p>
      <img src={logo} width="500" />
      
      <Link to="/get-quote">
                   <button id="unique-id"  style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px',
                   textAlign: "center",
                   margin: "auto",
                   width: '100%',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '50px',
                   fontSize: "18px",
                   padding: "8px",
               }}>Get Quote</button>
               </Link>
      
               </section>  
  );
}

export default Home;