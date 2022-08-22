import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "./post.model";

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {
}
