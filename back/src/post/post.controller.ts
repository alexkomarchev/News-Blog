import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {PostService} from "./post.service";
import {CreatePostDto} from "./dto/createPost.dto";


@Controller("post")
export class PostController {
  constructor(private postService: PostService) {
  }

  @Post()
  create(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @Get()
  getAll() {
    return this.postService.findAll();
  }

  @Get(":id")
  getById(@Param("id") id) {
    return this.postService.findById(id);
  }

  @Delete()
  remove(@Query() query){
    return this.postService.remove(query.id)
  }

  // @Get()
  // getByQuery(@Query() query) {
  //   return 'limit:' + query.limit
  // }


}