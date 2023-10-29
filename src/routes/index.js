import express from "express"
import UserRoutes from "./user.js"
import BlogsRouter from './blogs.js'
import DashboardRouter from './dashboard.js'
const router = express.Router()

router.get('/',(req,res)=>{
res.status(200).send(`<h1 className="text-center">welocome to Blog app back_end</h1>`
)
})

router.use('/user',UserRoutes)
router.use('/blogs',BlogsRouter)
router.use('/dashboard',DashboardRouter)
export default router