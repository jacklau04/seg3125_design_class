import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
       <nav className="navbar">
           <h1>Jack the Consultant</h1>
           <div className ="links">
               <Link to="/">Home</Link>
               <Link to="/how-it-works">How it works</Link>
               <Link to="/event">Event</Link>
               <Link to="/explore">Explore</Link>
               <Link to="/get-quote" style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px'
               }}>Get Quote</Link>
               <Link to="/fr">Fr</Link>
           </div>
       </nav> 
    );
}
 
export default Navbar;