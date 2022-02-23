import * as mongoose from 'mongoose';

export const userDbSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Male"
    },
}, {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    }
})
userDbSchema.virtual('fullName').get(function () {
    return this.firstName + this.lastName
});

export interface userDbInterFace{
    firstName:string,
    lastName:string,
    email:string,
    age:number,
    gender:string,
    fullName:string
}

