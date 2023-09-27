import Cards from "../cards/Cards";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        setAux(!aux);
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value));
        console.log(event.target);
    }

    return (
       <div>
            <select onChange={handleOrder}>
                <option value="A">Acendente</option>
                <option value="D">Decendente</option>
            </select>

            <select onChange={handleFilter}>
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


