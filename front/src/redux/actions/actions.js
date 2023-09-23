import { ADD_FAV, REMOVE_FAV } from '../action-types/actionTypes'
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
        payload: parseInt(id)
    }
}


export {
    addFav,
    removeFav
}