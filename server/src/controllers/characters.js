const charactersController={}
let {characters}=require('../utils/data')

charactersController.get=async(req,res,next)=>{
    try {
        res.json(characters) 
    } catch (error) {
        res.status(500).json({error:'error'})
    }
}

charactersController.post=async(req,res,next)=>{
    const {id}=req.body

    try {
        if(characters.some(el=>el.id===parseInt(id))){
            throw new Error('Character already added')
        }
        const response=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data=await response.json()
        data.favorite=false
        characters.push(data)
        res.json(characters) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

charactersController.delete=async(req,res,next)=>{
    const id=req.params.characterid
    
    try {
        if(characters.find(el=>el.id===parseInt(id))===undefined){
            throw new Error('Character not added')
        } 
        
        characters=characters.filter(char=>parseInt(char.id)!==parseInt(id))
        res.status(200).json(characters)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=charactersController