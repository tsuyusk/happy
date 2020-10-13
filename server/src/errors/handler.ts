import { ErrorRequestHandler } from 'express';
import * as Yup from 'yup';

import AppError from './AppError';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  if (error instanceof Yup.ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation errors', errors });
  }

  console.error(error);

  return response.status(500).json({
    status: 500,
    message: 'Internal server error',
  });
};

export default errorHandler;
