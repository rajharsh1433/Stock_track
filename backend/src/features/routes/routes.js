import express from "express";
import dataRetrival from "../controller/controller.js";

//creating an express router for data retrival serving as an endpoint
const apiRouter = express.Router();


apiRouter.get('/coin-list',dataRetrival);

//exporting the api router
export default apiRouter;