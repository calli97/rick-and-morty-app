const URL='https://rickandmortyapi.com/api/character/'

const getCharById=async(req,res,next)=>{
    const {characterid}=req.params
    try {
        let response=await fetch(`${URL}${characterid}`)
        let data=await response.json()
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({error:err})
    } 
}

module.exports=getCharById