import { Router } from "express";
import { redirectUrl, urlShorter } from "../services/urlShorter.js";

const router = Router();

router.post("/", urlShorter);
router.get("/", redirectUrl);

export default router;
