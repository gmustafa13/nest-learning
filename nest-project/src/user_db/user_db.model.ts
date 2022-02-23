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
    timestamps:true,
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    }
})
/** 
 * this will not saved in db but while fetching data from db it will 
 * concat firstName and lastName and return as fullName
 */
userDbSchema.virtual('fullName').get(function () {
    return this.firstName +" "+ this.lastName
});

/**
 * this is ts feature to validate our input/output or params 
 */
export interface userDbInterFace {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    gender: string,
    fullName: string
}

