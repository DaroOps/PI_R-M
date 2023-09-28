import Cards from "../cards/Cards";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleChange = (event)=>{

        console.log(event.target);
        if(event.target.name === 'filter'){
            dispatch(filterCards(event.target.value));  
        }
        else{
            setAux(!aux);
            dispatch(orderCards(event.target.value));
            // console.log(event.target);
        }
        
    }
    

    return (
       <div>
            <select name="order" onChange={handleChange}>
                <option value="A">Acendente</option>
                <option value="D">Decendente</option>
            </select>

            <select name="filter" onChange={handleChange}>
                <option value="All">All Characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknow">Unknow</option>

            </select>

            <Cards characters={myFavorites}/>
        </div>

    );

}

export default Favorites


