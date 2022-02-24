import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import {messageInterface} from  './message.model';


@Injectable()
export class MessageServices{
constructor(@InjectModel('Message') private readonly messageModel: Model<messageInterface>){}

async createMessage(senderUser:string,recieverUser:string,message:string){
const messageData = new this.messageModel({senderUser,recieverUser,message});
return await messageData.save();
}
}