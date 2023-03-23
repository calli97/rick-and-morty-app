export const ADD_FAVORITE='ADD_FAVORITE'
export const DELETE_FAVORITE='DELETE_FAVORITE'
export const GET_FAVORITES='GET_FAVORITES'
export const ADD_CHARACTER='ADD_CHARACTER'
export const GET_CHARACTER='GET_CHARACTER'
export const DELETE_CHARACTER='DELETE_CHARACTER'
export const ORDER_BY_ID='ORDER_BY_ID'
export const ORDER_BY_NAME='ORDER_BY_NAME'
export const ORDER_NONE='ORDER_NONE'
export const FILTER_NONE='FILTER_NONE'
export const FILTER_BY_GENDER='FILTER_BY_GENDER'
export const FILTER_BY_STATUS='FILTER_BY_STATUS'


//Actions
export const orderNone=()=>{
    return{
        type:ORDER_NONE
    }
}
export const orderByName=()=>{
    return{
        type:ORDER_BY_NAME
    }
}

export const orderByID=()=>{
    return {
        type:ORDER_BY_ID
    }
}

export const filterNone=()=>{
    return{
        type:FILTER_NONE
    }
}
export const filterByGender=(gender)=>{
    return{
        type:FILTER_BY_GENDER,
        payload:gender
    }
}

export const FilterByStatus=(status)=>{
    return {
        type:FILTER_BY_STATUS,
        payload:status
    }
}

export const getFavorites=()=>{
    return async function (dispatch) {
        const response=await fetch('http://localhost:3001/favorites',{
            method:'GET'
        })
        const data=await response.json()
         dispatch({
            type:GET_FAVORITES,
            payload:data
        })
    }
}

export const addFavorite=(characterId)=>{
    return async function (dispatch) {
        const response=await fetch('http://localhost:3001/favorites',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ id: characterId })
        })
        const favData=await response.json()
        const charResponse=await fetch('http://localhost:3001/characters',{
            method:'GET'
        })
        const charData=await charResponse.json()
         dispatch({
            type:ADD_FAVORITE,
            payload:{favData,charData}
        })
    }
}



export const deleteFavorite=(characterId)=>{
    return async function (dispatch) {
        const favResponse=await fetch(`http://localhost:3001/favorites/${characterId}`,{
            method:'DELETE'
        })
        const favData=await favResponse.json()
        const charResponse=await fetch('http://localhost:3001/characters/')
        const charData=await charResponse.json()
         dispatch({
            type:DELETE_FAVORITE,
            payload:{charData,favData}
        })
    }
}

export function addCharacter(characterId){
    return async function(dispatch) {
        const response=await fetch('http://localhost:3001/characters',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ id: characterId })
        })
        const data=await response.json()
        dispatch ({
            type:ADD_CHARACTER,
            payload:data
        })
    }
}

export const getCharacter=()=>{
    return async function (dispatch) {
        const response=await fetch('http://localhost:3001/characters',{
            method:'GET'
        })
        const data= await response.json()
         dispatch({
            type:GET_CHARACTER,
            payload:data
        })
    }
}

export const deleteCharacter=(characterId)=>{
    return async function (dispatch) {
        const charResponse=await fetch(`http://localhost:3001/characters/${characterId}`,{
            method:'DELETE'
        })
        const charData=await charResponse.json()
        //If you delete a character you also deleted from the favorites list
        const favResponse=await fetch(`http://localhost:3001/favorites`,{
            method:'GET'
        })
        const favData=await favResponse.json()
        console.log('favData:',favData)
        console.log('charData: ',charData)
         dispatch({
            type:DELETE_CHARACTER,
            payload:{charData,favData}
        })
    }
}


