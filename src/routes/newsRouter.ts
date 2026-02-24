import { Router } from "express";
import NewsController from "@controllers/news/newsController";
import { Knex } from "knex";



const newsRoutes = (db: Knex) => {
  const router = Router();
  const controller = new NewsController(db);

  router.get("/news", controller.index)
  //router.get("/user/:id", controller.getById);

  return router;
};

export default newsRoutes;
