import { Router, Request, Response } from "express";
import { wrap } from "./commonHandler";

const router = Router();

router.all(
  "/",
  wrap(async (req: Request, res: Response) => {
    res.status(200).send("test");
  })
);

export default router;
