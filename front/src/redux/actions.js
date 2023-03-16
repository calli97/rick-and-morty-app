const ADD_FAVORITE='ADD_FAVORITE'
const DELETE_FAVORITE='DELETE_FAVORITE'

//Actions
const addFavorite=(character)=>{
    return{
        type:ADD_FAVORITE,
        payload:character
    }
}

const deleteFavorite=(character)=>{
    return{
        type:DELETE_FAVORITE,
        payload:character
    }
}

module.exports={
    ADD_FAVORITE,
    DELETE_FAVORITE,
    deleteFavorite,
    addFavorite
}