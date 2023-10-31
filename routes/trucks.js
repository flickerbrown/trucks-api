import { Router } from "express";
import * as controllers from "../controllers/trucks.js";

const router = Router();

router.get("/", controllers.getTrucks);
router.get("/:id", controllers.getTruck);
router.post("/", controllers.createTruck);
router.put("/:id", controllers.updateTruck);
router.delete("/:id", controllers.deleteTruck);

export default router;