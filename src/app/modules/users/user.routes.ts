import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/users", userController.createAdmin);

export const UserRoutes= router;
