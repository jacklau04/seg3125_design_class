import { useState } from "react";
import { useHistory } from "react-router";


const Help = () => {

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
            <h2 className="h1-responsive font-weight-bold my-5">Help</h2>
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
                <label>Description</label>
                <textarea 
                    required
                ></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Help;