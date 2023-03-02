import { ADD_FAVORITE,DELETE_FAVORITE } from "./actions";

const initialState={
    myFavorites:[]
}


const reducer=(state = initialState, { type, payload })=>{
    switch (type) {

    case ADD_FAVORITE:
        if(state.myFavorites.find((character)=>{
            return character.id===payload.id;
        })){
            return state
        }else{
            return { 
                ...state, 
                myFavorites:[...state.myFavorites,payload] 
            }
        }  
    case DELETE_FAVORITE:
        return{
            ...state,
            myFavorites:state.myFavorites.filter(el=>el.id!==payload)
        }
    default:
        return state
  }
}

export default reducer;