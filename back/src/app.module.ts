import { Module } from "@nestjs/common";
import { PostModule } from "./post/post.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "./post/post.model";
import {UserModule} from './user/user.module'
import { User } from "./user/user.model";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "blog",
    models: [Post,User],
    autoLoadModels:true,
  }), PostModule,UserModule, AuthModule],
})
export class AppModule {
}
