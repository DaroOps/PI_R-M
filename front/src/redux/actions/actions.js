import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../actions/types'
import axios from 'axios'


 const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      //console.log('Datos recibidos en addFav antes de la serialización:', character);
      //console.log(character.name )
      axios.post(endpoint, character).then(({ data }) => {
         // console.log('Datos recibidos en addFav después de la solicitud:', data);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

 const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

const filterCards = (gender) =>{
    return{
        type:FILTER,
        payload:gender
    }
}

const orderCards = (order) => {
    return{
        type:ORDER,
        payload: order
    }
}


export {
    addFav,
    removeFav,
    orderCards,
    filterCards
}