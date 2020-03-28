import { RequestHandler, Request, Response, NextFunction } from "express";

//catch handler for async await
export const wrap = (reqFunc: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => reqFunc(req, res, next).catch(next);
