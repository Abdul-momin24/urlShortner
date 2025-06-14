import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import AuthPage from "../pages/AuthPage"
import DashboardPage from "../pages/DashboardPage"
import HomePage from "../pages/HomePage"


export const HomePageRoute  = createRoute({
    getParentRoute: () => rootRoute ,
    path: '/',
    component:HomePage
  })