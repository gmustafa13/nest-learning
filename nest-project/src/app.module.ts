import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDbModule } from './user_db/usere_db.module';
import { MessageModule } from './message/message.module';
/**
 * for connecting to mongodb 
 * we are using MongoooseModule.forRoot()
 * this is equivilent to mongoose.connect() in js
 * 
 * for more info visit
 * https://docs.nestjs.com/techniques/mongodb
 * 
 */

@Module({
  imports: [UserModule , MessageModule,MongooseModule.forRoot('mongodb://localhost/nest-learning'),UserDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
