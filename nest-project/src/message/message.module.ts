import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {messageSchema} from './message.model';
import { MessageServices } from "./message.services";
import { MessageController } from "./message.controller";

@Module({
    imports:[MongooseModule.forFeature([{
        name:"Message",
        schema:messageSchema
    }])],
    controllers:[MessageController],
    providers:[MessageServices]
})
export class MessageModule{}