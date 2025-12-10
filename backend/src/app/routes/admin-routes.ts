import { Router } from "express";
import { adminAuthMiddle } from "../middlewares/admin/admin-auth-middle.js";
import { listUsers } from "../database/providers/users/list-providers.js";

const routesAdmin = Router();

routesAdmin.get("/admin/list-users", adminAuthMiddle, listUsers )

export default routesAdmin;