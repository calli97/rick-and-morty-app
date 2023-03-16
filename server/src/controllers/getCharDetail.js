const URL='https://rickandmortyapi.com/api/character/'

const getCharDetail=async(req,res,next)=>{
    const {characterid}=req.params
    try {
        const request=await fetch(`https://rickandmortyapi.com/api/character/${characterid}`)
        const data=await request.json()
        res.json(data)
    } catch (err) {
        res.status(500).json({error:err})
    } 
}

module.exports=getCharDetail