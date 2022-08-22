import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../user/user.model";
import { LoginDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService) {
  }

  async login(loginDto: LoginDto) {
      const user = await this.validateUser(loginDto)
      return this.generateToken(user)
  }

  private async validateUser({ email, password }: LoginDto) {
    const user = await this.userService.getUserByEmail(email);
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({message:"Неверный логин или пароль"})
  }


  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException("Пользователь с таким email уже существует", HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({ ...userDto, password: hashPassword });
    return this.generateToken(user);
  }

  async generateToken({ email, id, name }: User) {
    const payload = { email, id, name };

    return {
      token: this.jwtService.sign(payload)
    };
  }


}
