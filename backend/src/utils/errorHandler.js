// utils/error/errorHandler.js
 import  AppError from "./AppError.js"




const errorHandler = (err, req, res, next) => {

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }



  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
