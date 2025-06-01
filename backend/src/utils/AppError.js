
class AppError extends Error {
    statusCode;
    isOperational;

    constructor(message, statusCode,isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
export default AppError;
  

export class NotFoundError extends AppError{
    constructor(message = "Resource not found"){
        super(message, 404);
    }
}


export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized access") {
        super(message, 401);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Access forbidden") {
        super(message, 403);
    }
}

export class InternalServerError extends AppError {
    constructor(message = "Internal server error") {
        super(message, 500);
    }
}



export class ShortCodeGenerationError extends AppError {
    constructor(message = "Short code not generated") {
      super(message, 500); // 500 Internal Server Error or other appropriate status
    }
  }