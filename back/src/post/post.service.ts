import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./post.model";
import { CreatePostDto } from "./dto/createPost.dto";

@Injectable()
export class PostService {

  constructor(@InjectModel(Post) private postRepository: typeof Post) {
  }

  async createPost(dto:CreatePostDto){
    const post = await this.postRepository.create(dto)
    return post
  }

  async findAll() {
    const posts = await this.postRepository.findAll()
    return posts
  }

  async findById(id:number) {
    const posts = await this.postRepository.findByPk(id)
    return posts
  }
}