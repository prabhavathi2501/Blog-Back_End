import express from "express"
import UserController from "../controller/users.js"
const router = express.Router()

// router.get('/',(req,res)=>{
// res.status(200).send(`<h1 className="text-center">welocome to Blog app user Back_end</h1>`
// )
// })
router.post('/signup',UserController.create)
router.post('/login',UserController.login)

export default router