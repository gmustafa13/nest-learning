import { Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { UserService } from './user.service'

@Module({
    /**
     * import besically used for dependent controller
     */
    imports:[],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule{}