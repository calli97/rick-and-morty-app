const {Router}=require('express')
const router=Router()
const charactersController=require('../controllers/characters')

router.get('/',charactersController.get)

router.post('/',charactersController.post)

router.delete('/:characterid',charactersController.delete)

module.exports=router