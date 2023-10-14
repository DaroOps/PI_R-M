import {  ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types";

const initialState = {
    allCharacters: [],
    myFavorites: [],
    activeLink: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state,
                 myFavorites: action.payload, 
                 allCharacters: action.payload };
        case REMOVE_FAV:
            return { 
                ...state,
                 myFavorites: action.payload };
        case FILTER:

            const filterByGender = action.payload === 'All' ? state.allCharacters :
                [...state.allCharacters].filter((character) => character.gender === action.payload)

            //console.log('allCharacter ', state.allCharacters);
            //console.log('filterGender ', filterByGender);
            return {

                ...state,
                myFavorites: filterByGender

            }

        case ORDER:
            const favoritesOrdered = action.payload === "A"
                ? [...state.myFavorites].sort((charA, charB) => charA.id - charB.id)
                : [...state.myFavorites].sort((charA, charB) => charB.id - charA.id);
            // console.log('allCharacter ', state.allCharacters);
            // console.log('filterOrder ', favoritesOrdered);
            return {
                ...state,
                myFavorites: favoritesOrdered
            }
        

        default:
            return { ...state }
    }

}


export default reducer;
