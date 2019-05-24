import { Request, Response, NextFunction } from 'express'

export const wrapAsync = (fn: any) => {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next)
  }
}
