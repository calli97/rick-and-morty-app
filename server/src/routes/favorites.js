const {Router}=require('express')
const router=Router()

const favoriteController=require('../controllers/favorites')

router.get('/',favoriteController.get)

router.post('/',favoriteController.post)

router.delete('/:characterid',favoriteController.delete)

module.exports=router