import { Router } from "express";
import { userAuthMiddle } from "../middlewares/users/user-auth-middle.js";
import { listUsersControllers } from "../controllers/users/list-users.js";

const routesAuth = Router();

routesAuth.get('tokens/refresh', userAuthMiddle, listUsersControllers);

export default routesAuth;