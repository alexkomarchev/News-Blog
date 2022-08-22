import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "../post/post.model";
import { PostService } from "../post/post.service";
import { PostController } from "../post/post.controller";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports:[UserModule,JwtModule.register({
    secret:'alexkomarchev',
    signOptions:{
      expiresIn:'24h'
    }
  })],
  providers: [AuthService],
  controllers: [AuthController]})
export class AuthModule {

}
