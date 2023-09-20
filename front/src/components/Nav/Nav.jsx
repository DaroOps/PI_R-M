import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { useLocation } from "react-router-dom";

const Nav = ({onSearch}) =>
{
    //const [randomId, setRandomId] = useState(null);

    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        //setRandomId(num);
       
        onSearch(num);
      };
    
    let path = useLocation();
    
    //console.log(path)
    
    if(path.pathname === '/')
    {
        return null;
    }

    return(
            <div className="nav" >
                
            
                <Link to='/home' >
                    <button>Home</button>
                </Link>
               
                <Link to={'/about'}>
                    <button>About</button>
                </Link>
                
                <SearchBar onSearch={onSearch}/> 
                <button onClick={generateRandomId}>Random</button>

              
            </div>
    );
}

export default Nav;