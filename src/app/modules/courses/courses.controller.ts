import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CourseServices } from "./courses.services";

const createCourse = catchAsync(async (req, res) => {
  const course = await CourseServices.createCourseInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course Created Successfully",
    data: course,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const courses = await CourseServices.getAllCoursesFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Courses fetched successfully",
    data: courses,
  });
});

const getACourse = catchAsync(async (req, res) => {
  const courseId = req.params.id;
  const course = await CourseServices.getACourseFromDb(courseId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course fetched successfully",
    data: course,
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getACourse,
};
