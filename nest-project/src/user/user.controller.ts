import { Body, Controller, Post,Get } from "@nestjs/common";
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    /**
     * 
     * using service as a dependancy injector
     * so that i can acess UserService
     */
    constructor(private readonly userSrvc: UserService) { }
    @Post('create-user')
    /**
     * anoher way to access body directly
     * @Body() completeBody :{tittle:string,firstName:string,lastName:string,age:number,gender:string}
     */
    createuser(@Body('firstName') fName: string,
        @Body('lastName') lName: string,
        @Body('email') mail: string,
        @Body('age') uAge: number,
        @Body('gender') uGander: string) {
        let data = this.userSrvc.insertUser(fName,lName,mail,uAge,uGander)
        return { data: data };
    }

    @Get()
    getUserList(){
        const data = this.userSrvc.getAllUsers();
        return{data:data}
    }

    
}