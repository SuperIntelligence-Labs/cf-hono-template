import {ok, err, Result} from "neverthrow";
import {NotFoundError, UnauthorizedError} from "./utils/errors.ts";
import logger from "./utils/logger.ts";

// Example function simulating some business logic
function performAction(
    action: string,
    userLoggedIn: boolean
): Result<string, NotFoundError | UnauthorizedError> {

    if (!userLoggedIn) {
        return err(new UnauthorizedError("User must log in to perform actions"));
    }

    if (action === "deleteNonExistent") {
        return err(new NotFoundError("Item to delete not found"));
    }

    return ok("Action performed successfully!");
}

// Example usage
const result = performAction("deleteNonExistent", false);

// Handling the result
result.match(
    (success) => {
        logger.info(success);
    },
    (error) => {
        logger.error(error.message);
    }
);
