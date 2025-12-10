import { Router } from "express";
import { adminAuthMiddle } from "../middlewares/admin/admin-auth-middle.js";
import { listUsers } from "../database/providers/users/list-providers.js";
import adminDeletesUser from "../controllers/admin/admin-delete-user.js";
import { userRegisterController } from "../controllers/users/user-register.js";
import { updateUserController } from "../controllers/users/update-user.js";

const routesAdmin = Router();

routesAdmin.post('/admin/create-user',adminAuthMiddle, userRegisterController);
routesAdmin.get("/admin/list-users", adminAuthMiddle, listUsers )
routesAdmin.patch('/admin/update-user/:id', adminAuthMiddle, updateUserController);
routesAdmin.delete('/admin/delete-user/:id', adminAuthMiddle, adminDeletesUser)


export default routesAdmin; 