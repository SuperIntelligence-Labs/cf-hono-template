/**
 * Main entry point for the Hono application.
 * This file sets up the Hono app, applies middlewares, and defines routes.
 * **/
import {type Env, Hono} from "hono";
import { logger } from "hono/logger";
import routes from "./routes";
import {NotFoundError} from "./utils/error/errors.ts";
import {handleResult} from "./utils/error/response-handler.ts";
import {err} from "neverthrow";

export const app = new Hono<{ Bindings: Env }>();

// Middlewares
app.use("*", logger());

// Routes
app.route("/", routes);

// If request does not match to any route, return 404
app.notFound((c) => {
    return handleResult(
        err(new NotFoundError(`Resource '${c.req.path}' not found`))
    );
});


