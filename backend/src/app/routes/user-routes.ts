import { Router } from "express";
import { userRegisterMiddle } from "../middlewares/users/user-register-middle.js";
import { userRegisterController } from "../controllers/users/user-register.js";
import { listUsersControllers } from "../controllers/users/list-users.js";
import { updateUserController } from "../controllers/users/update-user.js";
import { deleteUserController } from "../controllers/users/delete-user.js";

const routes = Router();

routes.get('',(req, res)=>{
    res.json({message: "Hello World"})
});

routes.post('/users', userRegisterMiddle, userRegisterController);
routes.get('/users',listUsersControllers );
routes.patch('/users/:id', updateUserController);
routes.delete('/users/:id', deleteUserController);



export default routes;