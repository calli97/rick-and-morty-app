import { ADD_FAVORITE,DELETE_FAVORITE,GET_FAVORITES,GET_CHARACTER,ADD_CHARACTER,DELETE_CHARACTER,
ORDER_BY_ID,ORDER_NONE,ORDER_BY_NAME,FILTER_BY_GENDER,FILTER_NONE,FILTER_BY_STATUS} from "./actions";

const initialState={
    myFavorites:[],
    myCharacters:[],
    ordered:[],
    orderBy:'none',
    filter:'none'
}


const reducer=(state = initialState, { type, payload })=>{
    switch (type) {
        case GET_CHARACTER:
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
                myCharacters:payload.charData,
                myFavorites:payload.favData,
                ordered:payload.favData,
                orderBy:'none'
            }
        case GET_FAVORITES:
            return{
                ...state,
                myFavorites:payload,
                ordered:payload,
                orderBy:'none'
            }
        case ADD_FAVORITE:
            return { 
                ...state, 
                myFavorites:payload.favData,
                myCharacters:payload.charData,
                ordered:payload.favData,
                orderBy:'none'
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites:payload.favData,
                myCharacters:payload.charData,
                ordered:payload.favData,
                orderBy:'none'
            }
        case ORDER_NONE:
            return{
                ...state,
                ordered:state.myFavorites,
                orderBy:'none'
            }
        case ORDER_BY_ID:
            let order=state.ordered.sort((a,b)=>a.id-b.id)
            return {
                ...state,
                orderBy:'id',
                ordered:[...order]
            }
        case ORDER_BY_NAME:
            let name=state.ordered.sort((a,b)=>a.name.localeCompare(b.name))
            return{
                ...state,
                orderBy:'name',
                ordered:[...name]
            }
        case FILTER_NONE:
            return{
                ...state,
                orderBy:'none',
                filter:'none',
                ordered:state.myFavorites
            }
        case FILTER_BY_GENDER:
            let aux=state.myFavorites.filter(e=>e.gender===payload)
            return{
                ...state,
                filter:'payload',
                ordered:aux
            }
        default:
            return state
  }
}

export default reducer;