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
    async getAllUsers(pageNumber: number | null, pageSize: number | null, searchText: string | null) {
        let searchObject
        /**
         * creating regex for serching text on field 
         * firstName,lastName,email
         */
        if (searchText) {
            searchObject = {
                $match: {
                    $or: [
                        {
                            firstName: { $regex: searchText, $options: 'i' }
                        },
                        {
                            lastName: { $regex: searchText, $options: 'i' }
                        },
                        {
                            emailName: { $regex: searchText, $options: 'i' }
                        }
                    ]
                }
            }
        } else {
            searchObject = { $match: {} }
        }
        /**
         * overriting pageNumber and pageSize if its null
         */
        pageNumber = pageNumber ? pageNumber : 1
        pageSize = pageSize ? pageSize : 100
        const offcet = (pageNumber - 1) * pageSize
        let result = await this.userDbModel.aggregate([
            searchObject,
            {
                $sort: {
                    createdAt: -1
                }
            },
            {
                $facet: {
                    metadata: [{ $count: "totalCount" }, { $addFields: { page: pageNumber } }],
                    data: [{ $skip: offcet }, { $limit: pageSize }]
                }
            }
        ]).allowDiskUse(true);
        return result
    }
    async updateOne(email, user: userDbInterFace) {
        return await this.userDbModel.updateOne({ email }, { $set: user })    
    }
    async deleteOne(email:string){
        return await this.userDbModel.deleteOne({email})
    }
}