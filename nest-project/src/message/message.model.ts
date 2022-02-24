import * as mongoose from 'mongoose';

export const messageSchema = new mongoose.Schema({
    senderUser: {
        type: mongoose.Types.ObjectId
    },
    recieverUser: {
        type: mongoose.Types.ObjectId
    },
    message: {
        type: String
    },
}, {
    timestamps: true,
    // toObject: {
    //     virtuals: true,
    // },
    // toJSON: {
    //     virtuals: true,
    // }

})

export interface messageInterface {
    senderUser:string,
    recieverUser:string,
    message:string
}