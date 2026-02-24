import { GetAllDTO } from "contracts/news/newsContractsDTO";
import { BaseRepository } from "../BaseRepository";
import { Knex } from "knex";

export class NewsRepository extends BaseRepository<GetAllDTO>  {

  constructor(db: Knex) {
    super("news", db);
  }

  async allNews(clientId: number): Promise<GetAllDTO[]> {

    return await this.db(this.tableName).select("*").where({client_Id: clientId});
  }

}