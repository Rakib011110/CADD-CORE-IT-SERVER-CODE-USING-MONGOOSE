import express from "express";
import { CourseControllers } from "./courses.controller";

const router = express.Router();

router.post("/create-course", CourseControllers.createCourse);
router.get("/", CourseControllers.getAllCourses);
router.get("/:id", CourseControllers.getACourse);

export const CourseRoutes = router;
