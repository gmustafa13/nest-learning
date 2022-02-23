import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserDbController } from "./user_db.controller";
import { userDbSchema } from "./user_db.model";
import { UserDbServices } from "./user_db.service";
/**
 * MongoosModule.forFeature() is a accept array of object
 * to create mongoose model 
 * it is equivelent to 
 * mongoose.model("modelName","schemaName")
 */

/**
 * controllers: will contain alll module controller
 * providers: will contain all module services 
 * and this module should be be include in app.module.ts
 */
@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:userDbSchema}])],
    controllers:[UserDbController],
    providers:[UserDbServices]
})
export class UserDbModule{}