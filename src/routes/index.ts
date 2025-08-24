/**
 * This file will contain all the routes for the application.
 * **/
import {Hono} from "hono";
import type {AppEnv} from "../config/app-env.ts";

const routes = new Hono<AppEnv>();


export default routes;