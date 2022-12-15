import { NextFunction,Request,Response } from "express";
import { EntityNotFoundError } from "typeorm";
import { NotFoundError } from "./errors";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.name){
    case NotFoundError.name:
    case EntityNotFoundError.name:
        return res.status(404).json({
          message: "Entity could not be found",
        });
        default: 
        return res.status(500).json({
          message: err.message,
        });
  }
}