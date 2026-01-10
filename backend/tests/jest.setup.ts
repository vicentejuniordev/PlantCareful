
import supertest from "supertest";
import app from "../src/app/index.js";
 
const testServer = supertest(app);

export default testServer;
