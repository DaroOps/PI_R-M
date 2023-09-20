import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


const Nav = ({onSearch}) =>
{
    //const [randomId, setRandomId] = useState(null);

    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        //setRandomId(num);
       
        onSearch(num);
      };
   

    return(
            <div className="nav" >
                
                <button>
                    <Link to='/' >Home</Link>
                </button>
                <button>
                    <Link to={'/about'}>About</Link>
                </button>
                <SearchBar onSearch={onSearch}/> 
                <button onClick={generateRandomId}>Random</button>

              
            </div>
    );
}

export default Nav;