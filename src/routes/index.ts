import { Router } from "express";
import { UserRoutes } from "../app/modules/User/user.routes";
import { CourseRoutes } from "../app/modules/courses/courses.routes";
import { SeminarRoutes } from "../app/modules/seminar/seminar.routes";
import { EventRoutes } from "../app/modules/Events/event.routes";
import { TeamRouter } from "../app/modules/Team/team.routes";

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
    {
      path: "/seminars",
      route: SeminarRoutes,
    }, 
    {
      path: "/events",
      route: EventRoutes
    },
    {
      path: "/team",
      route: TeamRouter
    }
    
  ]; 


  moduleRoutes.forEach((route) => routes.use(route.path, route.route));

  export default routes;