import { useState } from "react";
import { useHistory } from "react-router";


const GetQuote2 = () => {

    const [name, setName] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
            
        alert("We are looking forward to helping you, "+
        name +"!"
        );

        window.location.href = "index.php";
        
    }

    return (  
        <div className = "GetQuote">
            <h2 className="h1-responsive font-weight-bold my-5">Get Quote</h2>
            <form onSubmit={handleSubmit}>
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
                <label>Consultant Type</label>
                <select>
                    <option value="Opeartion" selected>Opeartion</option>
                    <option value="Financial">Financial</option>
                    <option value="Strategic">Strategic</option>
                </select>
                <label>Description</label>
                <textarea 
                    required
                ></textarea>
                <label>Estimated Time (Hour)</label>
                <input 
                    type="number"
                    value = "5"
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default GetQuote2;