import {Body, Controller, Get, Param, Post} from "@nestjs/common";
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

  // @Get()
  // getByQuery(@Query() query) {
  //   return 'limit:' + query.limit
  // }


}