import { useState } from "react";
import './SearchBar.modules.css';

const SearchBar = ({onSearch}) => {

   const [id, setID] = useState('');

   const handleChange = (event) =>
   {
      setID(event.target.value)
   }   

   return (
      <div className="searchComponent">
         <div className="inputDiv">
            <input type='search' value={id} onChange={handleChange}/>
         </div>
         <div className="searchButton">
            <button onClick={()=>onSearch(id)}>Search</button> 
         </div>
      </div>
   );
}

export default SearchBar