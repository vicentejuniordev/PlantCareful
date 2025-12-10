import { Router } from "express";
import { userAuthMiddle } from "../middlewares/users/user-auth-middle.js";
import { listUsersControllers } from "../controllers/admin/list-users.js";

const routesAuth = Router();

routesAuth.post('/tokens/refresh', userAuthMiddle, listUsersControllers);

export default routesAuth;