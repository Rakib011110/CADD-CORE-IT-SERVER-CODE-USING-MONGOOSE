import { TCourse } from "./courses.interfaces";
import { Course } from "./courses.model";

const createCourseInDb = async (payload: TCourse) => {
  return await Course.create(payload);
};

const getAllCoursesFromDb = async () => {
  return await Course.find();
};

const getACourseFromDb = async (id: string) => {
  const course = await Course.findById(id);
  if (!course) {
    throw new Error("Course not found");
  }
  return course;
};

export const CourseServices = {
  createCourseInDb,
  getAllCoursesFromDb,
  getACourseFromDb,
};
