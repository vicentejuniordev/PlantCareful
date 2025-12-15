import { Router } from "express";
import { adminAuthMiddle } from "../middlewares/admin/admin-auth-middle.js";
import adminDeletesUser from "../controllers/admin/admin-delete-user.js";
import adminUpdateUser from "../controllers/admin/admin-update-user.js";
import { listUsersControllers } from "../controllers/admin/list-users.js";
const routesAdmin = Router();

routesAdmin.get("/admin/list-users", adminAuthMiddle, listUsersControllers)
routesAdmin.patch('/admin/update-user/:id', adminAuthMiddle, adminUpdateUser);
routesAdmin.delete('/admin/delete-user/:id', adminAuthMiddle, adminDeletesUser)


export default routesAdmin; 