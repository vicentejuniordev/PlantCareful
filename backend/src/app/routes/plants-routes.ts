import e, { Router } from "express";
import { createPlantController } from "../controllers/plants/create-plant.js";
import { plantRegisterMiddle } from "../middlewares/plants/plant-register-middle.js";
import { userAuthMiddle } from "../middlewares/users/user-auth-middle.js";
import { listPlantController } from "../controllers/plants/list-plants.js";
import deletePlantController from "../controllers/plants/delete-plant.js";
import updatePlant from "../controllers/plants/update-plant.js";

const plantroutes = Router();

plantroutes.post('/plants',userAuthMiddle, plantRegisterMiddle, createPlantController);
plantroutes.get('/plants', userAuthMiddle,  listPlantController);
plantroutes.delete('/plants/:id', userAuthMiddle, deletePlantController);
plantroutes.patch('/plants/:id', userAuthMiddle, updatePlant);

export default plantroutes;