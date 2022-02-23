import { Controller, Body, Post, Get ,Param,Query} from "@nestjs/common";
import { UserDbServices } from "./user_db.service";
@Controller('userdb')
export class UserDbController {
    /**
     * 
     * using service as a dependancy injector
     * so that i can acess UserDbService
     */
    constructor(private readonly userDbServices: UserDbServices) { }
    @Post('create-user')

    async createDbUser(
        /**
     * anoher way to access body directly
     * @Body() completeBody :{tittle:string,firstName:string,lastName:string,age:number,gender:string}
     */
        @Body('firstName') fName: string,
        @Body('lastName') lName: string,
        @Body('email') mail: string,
        @Body('age') uAge: number,
        @Body('gender') uGander: string) {
        const savedUser = await this.userDbServices.insertUserInDb(fName, lName, mail, uAge, uGander)
        return {
            data: savedUser,
            message: "successfully saved in db"
        }

    }

    @Get()
    async getAllUser(@Query('pageNumber') pageNo:string,@Query('pageSize') pageSize:string, @Query('searchText') serchText:string){
        let pageNumber = parseInt(pageNo,10);
        let pageSizeN = parseInt(pageSize,10)
        let data = await this.userDbServices.getAllUsers(pageNumber,pageSizeN,serchText);
        return data
        
    }
}