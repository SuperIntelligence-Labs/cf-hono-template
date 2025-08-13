import {Hono} from "hono";
import logger from "./utils/logger.ts";

const app = new Hono();

app.get("/", (c) => {
    logger.info("Received a request at '/'");
    return c.text("Hello Hono!");
});

export default app;
