// src/modules/user/user.controller.ts
import { Request, Response } from "express";
import { NewsService } from "@services/news/newsService";
import { NewsRepository } from "@repositories/news/newsRepository";
// import { UserRequestHandler } from "./userRequestHandler";
// import { UserResponseHandler } from "./userResponseHandler";
// import { CreateUserResponse, GetUserByIdResponse } from "contracts/user/userContractsRequest"
import { Knex } from "knex";



export default class NewsController {
  private newsService: NewsService;
  
  constructor(db: Knex) {
    const newsRepository = new NewsRepository(db);
    this.newsService = new NewsService(newsRepository);
  }

  /**
 * @openapi
 * /news/:
 *   get:
 *     tags:
 *       - News
 *     summary: List news
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *     responses:
 *       200:
 *         description: All news 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewsAll'
 *       500:
 *         description: Internal server error
 */

  index = async (req: Request, res: Response) => {

    const news = await this.newsService.findAll(1);
    console.log(news)
    res.json(news);
  }

/**
 * @openapi
 * /news/{id}:
 *   get:
 *     tags:
 *       - News
 *     summary: Get news by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: News found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewsById'
 *       404:
 *         description: News not found
 */
//   getById = async (req: Request, res: Response) => {

//     const requesValidate = UserRequestHandler.validateToGetById(req.params.id)
//     if(requesValidate.error) {
//       throw new Error(`User error: ${requesValidate.message}`)
//     }
//     const user = await this.userService.getUserById(Number(req.params.id))

//     const response: GetUserByIdResponse = {
//       success: true,
//       data: {
//         name: user.name,
//         email: user.email,
//         accessLevel: user.accessLevel,
//         clientId: user.clientId
//       }
//     };

//     res.status(200).json(response)
//   }

}
