import { ADD_FAVORITE,DELETE_FAVORITE,GET_FAVORITES,GET_CHARACTER,ADD_CHARACTER,DELETE_CHARACTER} from "./actions";

const initialState={
    myFavorites:[],
    myCharacters:[]
}


const reducer=(state = initialState, { type, payload })=>{
    switch (type) {
        case GET_CHARACTER:
            console.log('somos')
            return {
                ...state,
                myCharacters:payload
            }
        case ADD_CHARACTER:
            return {
                ...state,
                myCharacters:payload
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                myCharacters:payload.data,
                myFavorites:payload.favData
            }
        case GET_FAVORITES:
            return{
                ...state,
                myFavorites:payload
            }
        case ADD_FAVORITE:
            return { 
                ...state, 
                myFavorites:payload
            } 
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites:payload
            }
        default:
            return state
  }
}

export default reducer;