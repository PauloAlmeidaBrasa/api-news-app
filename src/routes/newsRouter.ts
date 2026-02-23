import { Router } from "express";
import NewsController from "@controllers/newsController";
import { Knex } from "knex";



const newsRoutes = (db: Knex) => {
  const router = Router();
  const controller = new NewsController(db);

  router.get("/news", controller.index)
//   router.get("/user/:id", controller.getById);
//   router.post("/user/create", controller.store)
//   router.patch("/user/update/:id", controller.update)
//   router.post("/user/delete/:id", controller.delete)

  return router;
};

export default newsRoutes;
