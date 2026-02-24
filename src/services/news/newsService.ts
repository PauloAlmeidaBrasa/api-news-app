
import { NewsRepository } from "@repositories/news/newsRepository";
import { GetAllDTO } from "contracts/news/newsContractsDTO";


export class NewsService {

  private newsRepository: NewsRepository;

  constructor(newsRepository: NewsRepository) {
    this.newsRepository = newsRepository;
  }


  async findAll(clientId:number): Promise<GetAllDTO[]> {
    const client_id = clientId
    return this.newsRepository.allNews(client_id);
  }

}
