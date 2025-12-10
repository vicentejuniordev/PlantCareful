import express from 'express';
import "dotenv/config";
import routes from './routes/user-routes.js';
import routesAuth from './routes/auth-routes.js';
const app = express();
app.use(express.json());
app.use(routes);
app.use(routesAuth);

export default app;