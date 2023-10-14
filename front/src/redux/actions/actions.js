import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../actions/types'
import axios from 'axios'


 const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   
   
   return  async (dispatch) => {
      //console.log('Datos recibidos en addFav antes de la serialización:', character);
      //console.log(character.name )
      try {
         const {data} = await axios.post(endpoint, character);
         
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         throw Error(error.message);
      }
   };
};

 const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {

      try {
         const {data} = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         throw Error(error.message)
      }

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
    filterCards, 
   
}