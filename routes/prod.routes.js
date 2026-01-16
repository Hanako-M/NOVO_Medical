const {Router}=require("express")
const controller = require('../controllers/prod.cont.js');
const router = Router()

router.get("/",controller.viewProducts)

module.exports = router;

