import { Router } from "express";
import { UserRoutes } from "../app/modules/User/user.routes";
import { CourseRoutes } from "../app/modules/courses/courses.routes";

const routes = Router(); 

const moduleRoutes = [
    {
      path: "/users",
      route: UserRoutes,
    },
    {
      path: "/courses",
      route: CourseRoutes,
    },
    
  ]; 


  moduleRoutes.forEach((route) => routes.use(route.path, route.route));

  export default routes;