import { Controller, Post, Body } from "@nestjs/common";
import { MessageServices } from "./message.services";

@Controller('message')
export class MessageController {
    constructor(private readonly messageServices: MessageServices) { }
    @Post('create')
    async createMessage(
        @Body('senderUser') senderUser: string,
        @Body('recieverUser') recieverUser: string,
        @Body('message') message: string,

    ) {
        return await this.messageServices.createMessage(senderUser, recieverUser, message)
    }
}