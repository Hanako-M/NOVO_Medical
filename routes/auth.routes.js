const {Router} = require("express")
const controller = require("../controllers/auth.cont.js")
const router = Router()

router.post("/admin/signup", controller.adminSignUp);
router.post("/admin/signin", controller.signIn);
router.get("/admin/signout", controller.signOut);

module.exports = router;