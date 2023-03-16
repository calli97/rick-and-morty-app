const {Router}=require('express')
const router=Router()

const getCharById=require('../controllers/getCharById')
const getCharDetail=require('../controllers/getCharDetail')

router.get('/onsearch/:characterid',getCharById)

router.get('/detail/:characterid',getCharDetail)

module.exports=router