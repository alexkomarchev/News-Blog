import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
        imports: [forwardRef(() => UserModule), JwtModule.register({
            secret: 'alexkomarchev',
            signOptions: {
                expiresIn: '24h'
            }
        })],
        providers: [AuthService],
        controllers: [AuthController],
        exports: [AuthService, JwtModule]
    },
)

export class AuthModule {

}
