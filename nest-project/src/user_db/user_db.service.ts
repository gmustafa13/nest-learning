import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { userDbInterFace } from './user_db.model'


@Injectable()
export class UserDbServices {
    /**
     * 
     * injectable model will create instance (using as userDbModel) for us by passing schema name
     * witch was define in user_db.module.ts 
     * 
     */
    constructor(@InjectModel('User') private readonly userDbModel: Model<userDbInterFace>) { }
    async insertUserInDb(firstName: string, lastName: string, email: string, age: number, gender: string) {
        const createdData = new this.userDbModel({ firstName, lastName, email, age, gender });
        const savedData = await createdData.save();
        return savedData;
    }
}