const favoriteController={}

let {favorites,characters}=require('../utils/data')

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
        const item=characters.find(el=>el.id===parseInt(id))
        if(item===undefined){
            throw new Error('The character must be added first to be included in favorites')
        }
        favorites.push(item)
        res.json(favorites) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

favoriteController.delete=async(req,res,next)=>{
    const id=req.params.characterid
    try {
        if(favorites.find(el=>el.id===parseInt(id))===undefined){
            throw new Error('Character not added to Favorites')
        }
        favorites=favorites.filter(fav=>fav.id!==parseInt(id))
        res.json(favorites) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

module.exports=favoriteController