import { Router } from "express";
import trucksRoutes from "./trucks.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/trucks", trucksRoutes);

export default router;