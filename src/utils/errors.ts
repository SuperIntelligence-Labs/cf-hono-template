// Base class for all app errors
abstract class AppError extends Error {
    protected constructor(public identifier: string, message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

// General-purpose errors

export class NotFoundError extends AppError {
    constructor(resource?: string) {
        super("NOT_FOUND", `Resource not found${resource ? ": " + resource : ""}`);
    }
}

export class UnauthorizedError extends AppError {
    constructor(details?: string) {
        super("UNAUTHORIZED", `Unauthorized access.${details ? " " + details : ""}`);
    }
}

export class ForbiddenError extends AppError {
    constructor(details?: string) {
        super("FORBIDDEN", `Forbidden action.${details ? " " + details : ""}`);
    }
}

export class ValidationError extends AppError {
    constructor(details?: string) {
        super("VALIDATION_ERROR", `Validation failed.${details ? " " + details : ""}`);
    }
}

export class ConflictError extends AppError {
    constructor(details?: string) {
        super("CONFLICT", `Conflict detected.${details ? " " + details : ""}`);
    }
}

export class TimeoutError extends AppError {
    constructor(details?: string) {
        super("TIMEOUT", `Operation timed out.${details ? " " + details : ""}`);
    }
}

export class InternalServerError extends AppError {
    constructor(details?: string) {
        super("INTERNAL_SERVER_ERROR", `Internal server error.${details ? " " + details : ""}`);
    }
}

export class NetworkError extends AppError {
    constructor(details?: string) {
        super("NETWORK_ERROR", `Network error occurred.${details ? " " + details : ""}`);
    }
}

export class DatabaseError extends AppError {
    constructor(details?: string) {
        super("DATABASE_ERROR", `Database operation failed.${details ? " " + details : ""}`);
    }
}

export class AuthenticationError extends AppError {
    constructor(details?: string) {
        super("AUTHENTICATION_ERROR", `Authentication failed.${details ? " " + details : ""}`);
    }
}
