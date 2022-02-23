import { Controller, Body, Post, Get } from "@nestjs/common";
import { UserDbServices } from "./user_db.service";
@Controller('userdb')
export class UserDbController {
constructor(private readonly userDbServices: UserDbServices){}
    @Post('create-user')

    async createDbUser(
        @Body('firstName') fName: string,
        @Body('lastName') lName: string,
        @Body('email') mail: string,
        @Body('age') uAge: number,
        @Body('gender') uGander: string) {
        const savedUser = await this.userDbServices.insertUserInDb(fName,lName,mail,uAge,uGander)
        return {
            data:savedUser,
            message:"successfully saved in db"
        }

         }
}