import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types";

const initialState = {
    allCharacters: [],
    myFavorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]

            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id != action.payload)
            }
        case FILTER:
            return{
                ...state,
                myFavorites: action.payload == 'All'? [...state.allCharacters]:
                state.allCharacters.filter((character) => character.gender == action.payload)
                    
            }
        case ORDER:
            return{
                ...state,
                    myFavorites:action.payload==="A"?
                    state.allCharacters.sort((charA, charB)=> charA.id-charB.id):
                    state.allCharacters.sort((charA, charB)=> charB.id - charA.id)
                    
                   
                    
            }
        default:
            return { ...state }
    }

}


export default reducer;
