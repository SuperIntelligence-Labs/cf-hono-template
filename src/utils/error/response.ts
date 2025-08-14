export type SuccessResponse<T = unknown> = {
    success: true;
    status: number;
    timestamp: number;
    message: string;
    data: T;
};

export type ErrorResponse = {
    success: false;
    status: number;
    timestamp: number;
    message: string;
    error: unknown[];
};

/**
 * Send standardized success response
 */
export function success<T>(message: string, data: T): SuccessResponse {
    return {
        success: true,
        status: 200,
        timestamp: Date.now(),
        message,
        data,
    };
}

/**
 * Send standardized error response
 */
export function error(message: string, status: number, errors: unknown[] = []): ErrorResponse {
    return {
        success: false,
        status: status,
        timestamp: Date.now(),
        message,
        error: errors,
    };
}
