import { Router } from "express";
import { userRegisterMiddle } from "../middlewares/users/user-register-middle.js";
import { userRegisterController } from "../controllers/users/user-register.js";

const routes = Router();

routes.get('',(req, res)=>{
    res.json({message: "Hello World"})
});

routes.post('/users', userRegisterMiddle, userRegisterController)

export default routes;