import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

// middleware acts BEFORE the ROUTE HANDLER, i.e the controller
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("making request in " + req.url);
    next();
  }

}