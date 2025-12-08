import { Router } from "express";
import { userRegisterMiddle } from "../middlewares/users/user-register-middle.js";
import { userRegisterController } from "../controllers/users/user-register.js";
import { listUsersControllers } from "../controllers/users/list-users.js";
import { updateUserController } from "../controllers/users/update-user.js";
import { deleteUserController } from "../controllers/users/delete-user.js";
import { loginUser } from "../controllers/users/login-user.js";
import { userAuthMiddle } from "../middlewares/users/user-auth-middle.js";
import refreshToken from "../controllers/tokens/refresh-token.js";

const routes = Router();

routes.get('',(req, res)=>{
    res.json({message: "Hello World"})
});

routes.post('/users', userRegisterMiddle, userRegisterController);
routes.post('/users/login', loginUser);

routes.get('/users',userAuthMiddle,listUsersControllers );
routes.patch('/users/:id', updateUserController);
routes.delete('/users/me', userAuthMiddle, deleteUserController);



export default routes;