import e, { Router } from "express";
import { createPlantController } from "../controllers/plants/create-plant.js";
import { plantRegisterMiddle } from "../middlewares/plants/plant-register-middle.js";
import { userAuthMiddle } from "../middlewares/users/user-auth-middle.js";

const plantroutes = Router();

plantroutes.post('/plants',userAuthMiddle, plantRegisterMiddle, createPlantController)

export default plantroutes;