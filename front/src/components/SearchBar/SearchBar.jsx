import { useState } from "react";

const SearchBar = ({onSearch}) => {

   const [id, setID] = useState('');

   const handleChange = (event) =>
   {
      setID(event.target.value)
   }   

   return (
      <div>
         <input id='inputBarSearch' type='search' value={id} onChange={handleChange}/>
         <button id='searchButton' onClick={()=>onSearch(id)}>Search</button> 
      </div>
   );
}

export default SearchBar