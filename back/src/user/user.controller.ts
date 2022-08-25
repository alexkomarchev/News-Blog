import {Controller, Get, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('user')
export class UserController {

  constructor(private userService:UserService) {
  }


  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUser(){
    return this.userService.getAll()
  }


}
