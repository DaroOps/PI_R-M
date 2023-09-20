import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Detail = () => {

    const [character, setCharacter] = useState({});

    const {id} = useParams();

    useEffect(() => {

        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        
        <div>
            
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.origin?.name}</h2>
            
            {console.log(character)}

        </div>
    );
}

export default Detail;