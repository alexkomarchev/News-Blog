import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "../post/post.model";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }

}
