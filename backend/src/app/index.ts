import express from 'express';
import "dotenv/config";
import routes from './routes/user-routes.js';
import routesAuth from './routes/auth-routes.js';
import routesAdmin from './routes/admin-routes.js';
import plantroutes from './routes/plants-routes.js';
const app = express();
app.use(express.json());
app.use(routes);
app.use(routesAuth);
app.use(routesAdmin);
app.use(plantroutes);

export default app;