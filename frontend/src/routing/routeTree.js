import { createRootRoute } from "@tanstack/react-router"


import RouteLayout from "../App"
import { HomePageRoute } from "./homepage.route.js"
import { AuthRoute } from "./Auth.route.js"
import { dashboardRoute } from "./dashbord.route.js"


export const rootRoute = createRootRoute({
    component: RouteLayout
    });

 export const routeTree = rootRoute.addChildren([HomePageRoute, AuthRoute,dashboardRoute])





