import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../actions/types'
import axios from 'axios'

const addFav = (id) => {

    return (dispatch) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            return dispatch({ type: ADD_FAV, payload: data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

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