 import supertest from "supertest";
 import app from "../src/app";

 export const testserver = supertest(app);

 