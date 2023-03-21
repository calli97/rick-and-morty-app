const favoriteController={}

let {characters}=require('../utils/data')

favoriteController.get=async(req,res,next)=>{
    try {
        const data=characters.filter(el=>el.favorite===true)
        console.log(data)
        res.json(data) 
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
        if(item.favorite===true){
            throw new Error('The character is already in favorites')
        }
        item.favorite=true
        const data=characters.filter(el=>el.favorite===true)
        res.json(data) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}

favoriteController.delete=async(req,res,next)=>{
    const id=req.params.characterid
    try {
        const item=characters.find(el=>el.id===parseInt(id))
        if(item===undefined){
            throw new Error('Character not added ')
        }
        if(item.favorite===false){
            throw new Error('The character is not in favorites')
        }
        item.favorite=false
        const data=characters.filter(el=>el.favorite===true)
        res.json(data) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

module.exports=favoriteController