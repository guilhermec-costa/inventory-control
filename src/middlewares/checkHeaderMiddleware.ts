import { NextFunction, Request, Response } from "express";

export function checkHeaderMiddleware(req: Request, res: Response, next: NextFunction) {
  let headers = req.headers;
  if(headers["churrossan"]) {
    console.log("constains header churrosan: " + headers["churrossan"]);
    next();
  } else {
    console.log("does not constain header churrosan");
    // redirecting to the client
    // res.status(401).json({message: "Doest not contains the specified header"});
    next()
  }

}