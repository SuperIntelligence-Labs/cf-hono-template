/**
 * This file will contain all the routes for the application.
 * **/
import {type Env, Hono} from "hono";

const routes = new Hono<{ Bindings: Env }>();


export default routes;