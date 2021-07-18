import logo from './gathering.jpg';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useHistory } from "react-router";



const Events = () => {

    const [name, setName] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
            
        alert("We are looking forward to seeing you there, "+
        name +"!"
        );

        window.location.href = "index.php";
        
    }

    return ( 
        <section className="text-center my-5 mx-auto GetQuote">
      <img src={logo} width="400" style={{
                   margin: "auto",
                   AlignItems: "center",
                   JustifyContent: "centre",
                   }}/>
        <h2 className="h1-responsive font-weight-bold mx-auto my-5">
          Our Next Gathering
      </h2>
      <p className="lead grey-text w-responsive mx-auto mb-5"><b>Address:</b> 69 Bay Street, Ottawa &nbsp;
      <b>Topic:</b> Passive Income</p>

      <form className="text-center my-5 mx-auto" onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="email"
                    required
                />
                <button>Submit</button>
            </form>
    
            
      
               </section>  
  );
}
 
export default Events;