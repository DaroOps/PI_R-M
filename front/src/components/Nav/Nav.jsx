import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch}) =>
{
    const [randomId, setRandomId] = useState(null);

    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        setRandomId(num);
       
        onSearch(num);
      };
   

    return(
            <div className="Nav">
                <SearchBar onSearch={onSearch}/> 
                <button onClick={generateRandomId}>Random</button>
            </div>
    );
}

export default Nav;