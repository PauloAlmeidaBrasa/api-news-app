import { Router } from "express";
import newsRoutes from "@routes/newsRouter";
import { Knex } from "knex";

const registerRouter = (db: Knex) => {

  const router = Router();
  const API_VERSION = process.env.API_VERSION || "v1"

  router.use(`/${API_VERSION}`,newsRoutes(db)) //public routes


  return router
}

export default registerRouter