import { Router } from "express";
import newsRoutes from "@routes/newsRouter";
// import authenticationRoutes from "@routes/authenticationRouter"
// import { authMiddleware } from "middleware/authMiddleware"
import { Knex } from "knex";
// import docRoutes from "./docRouter";


const registerRouter = (db: Knex) => {

  const router = Router();
  const API_VERSION = process.env.API_VERSION || "v1"

  router.use(`/${API_VERSION}`,newsRoutes(db)) //public routes
  // router.use(`/${API_VERSION}`,docRoutes())


  // router.use(`/${API_VERSION}`,authMiddleware,userRoutes(db)) //auth routes
  // router.use(`/${API_VERSION}`,authMiddleware,clientRoutes(db))
  // router.use(`/${API_VERSION}`,authMiddleware,categoryRoutes(db))



  return router
}

export default registerRouter