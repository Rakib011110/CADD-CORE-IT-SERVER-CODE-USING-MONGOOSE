import { Router } from "express";
import { UserRoutes } from "../app/modules/User/user.routes";

const routes = Router(); 

const moduleRoutes = [
    {
      path: "/users",
      route: UserRoutes,
    },
    
  ]; 


  moduleRoutes.forEach((route) => routes.use(route.path, route.route));

  export default routes;