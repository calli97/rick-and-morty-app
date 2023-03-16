const favoriteController={}

let favorites=[]

favoriteController.get=async(req,res,next)=>{
    try {
        res.json(favorites) 
    } catch (error) {
        res.status(500).json({error:'error'})
    }
}

favoriteController.post=async(req,res,next)=>{
    const {id}=req.body
    try {
        const response=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data=await response.json()
        favorites.push(data)
        res.json(favorites) 
    } catch (error) {
        res.status(500).json({error:'error'})
    }
}

favoriteController.delete=async(req,res,next)=>{
    const {id}=req.body
    favorites=favorites.filter(fav=>fav.id!==paserInt(id))
    res.json(favorites)
}

module.exports=favoriteController