import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'nest' }),
    MessageModule,
    UserModule,
  ],
})
export class AppModule {}
